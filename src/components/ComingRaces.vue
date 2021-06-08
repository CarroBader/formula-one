<template>
  <div>
    <table
      striped hover
      v-for="race, i in comingRaces"
      :key="race[i]">
      <td> {{ race.raceName }}</td>
      <td> {{ race.Circuit.circuitName }}</td>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'Races',
    components: {
    },
    mounted () {
    axios
      .get('http://ergast.com/api/f1/current.json')
      .then(response => {
          console.log(response.data.MRData.RaceTable.Races);
        this.comingRaces = response.data.MRData.RaceTable.Races
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    },
    data () {
      return {
        comingRaces: []
      }
    }
  }
</script>

<style scoped>
table {
  font-family: 'Orbitron', 'sans-serif';
  color: white;
  width: 100%;
}

td, th {
  /* border: 1px solid #dddddd; */
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
