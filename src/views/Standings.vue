<template>
  <b-container class="default-background-center">
  <div class="row">
    <div class="col">
      <DriverStandings
      :driverStandings="driverStandings"
      v-if="getDriverStandingsDone"
       />
    </div>
    <div class="col">
      2/1
    </div>
  </div>
  <div class="row">
    <div class="col">
      1/2
    </div>
    <div class="col"> 
      2/2
    </div>
  </div>
  </b-container>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '../vars'
import DriverStandings from '../components/DriverStandings.vue'

export default {
  name: 'Home',
  components: {
    DriverStandings
  },
  data() {
    return {
      getDriverStandingsDone: false,
      // getTopConstructorDone: false,
      driverStandings: null,
      // leaderConstructor: null
    }
  },
  mounted() {
    this.getDriverStandings()
    //this.getConstructorDriver()
  },
  methods: {
    async getDriverStandings() {
      try {
        const response = await axios.get(`${baseUrl}current/driverStandings.json`)
        this.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        this.getDriverStandingsDone = true

      } catch(e) {
        console.error(e)
      }
    },
    // async getConstructorDriver() {
    //   try {
    //     const response = await axios.get(`${baseUrl}current/constructorStandings.json`)
    //     this.leaderConstructor = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    //     this.getTopConstructorDone = true
    //   } catch(e) {
    //     console.error(e)
    //   }
    // },
  }
}
</script>

<style scoped>

</style>
