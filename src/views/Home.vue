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
      2 of 2
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

var comingRaces = []
var todaysDate

export default {
  name: 'Home',
  components: {
    ComingRaces,
    NextRace
  },
  data() {
    return {
      isMounted: false,
      nextRace: null,
      futureRaces: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get(`${baseUrl}current.json`)

      this.allRaces = response.data.MRData.RaceTable.Races

      // Coming races
      todaysDate = this.getTodaysDate()
      this.allRaces.map(race => {
        let raceDate = Date.parse(race.date);

        if (raceDate >= todaysDate) {
          comingRaces.push(race)
        }
      });
      this.futureRaces = comingRaces.slice(1)
      this.nextRace = comingRaces[0]
      this.isMounted = true

    } catch(e) {
      console.error(e)
    }
  },
  methods: {
    getTodaysDate: function() {
      let dateToday = new Date(new Date().getTime()
      - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);

      return Date.parse(dateToday);
    }
  }
}
</script>

<style scoped>

</style>
