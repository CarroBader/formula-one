<template>
  <b-container class="default-background-center">
  <div class="row">
    <div class="col">
      <NextRace 
        :nextRace="nextRace"
        v-if="isMounted"/>
        <br>
    </div>
    <div class="col">
      <LastRace
      :race="race"
      :results="results"
      v-if="isMounted"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
        <ComingRaces
        :futureRaces="futureRaces"
        v-if="isMounted"/>
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  </b-container>
</template>     

<script>
import ComingRaces from '../components/ComingRaces.vue'
import axios from 'axios'
import { baseUrl } from '../vars'
import NextRace from '../components/NextRace.vue'
import LastRace from '../components/LastRace.vue'

var comingRaces = []
var todaysDate

export default {
  name: 'Home',
  components: {
    ComingRaces,
    NextRace,
    LastRace
  },
  data() {
    return {
      isMounted: false,
      dataLoaded: false,
      nextRace: null,
      futureRaces: null,
      race: null,
      results: null
    }
  },
  mounted() {
    this.getComingRaces()
  },
  methods: {
    async getComingRaces() {
      try {
        const response = await axios.get(`${baseUrl}current.json`)

        this.allRaces = response.data.MRData.RaceTable.Races

        todaysDate = this.getTodaysDate()
        this.allRaces.map(race => {
          let raceDate = Date.parse(race.date);

          if (raceDate >= todaysDate) {
            comingRaces.push(race)
          }
        });
        this.futureRaces = comingRaces.slice(1)
        this.nextRace = comingRaces[0]
        this.lastRound = comingRaces[0].round - 1
        this.season = this.nextRace.season

        this.getRaceResult(this.season, this.lastRound)

      } catch(e) {
        console.error(e)
      }
    },
    getTodaysDate() {
      let dateToday = new Date(new Date().getTime()
      - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);

      return Date.parse(dateToday);
    },
    async getRaceResult(season, lastRound) {
      try {
        const response = await axios.get(`${baseUrl}${season}/${lastRound}/results.json`)
        this.race = response.data.MRData.RaceTable.Races[0]
        console.log(this.race)
        this.results = this.race.Results
        console.log("results längd", this.results.length)
        this.isMounted = true

      } catch(e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
