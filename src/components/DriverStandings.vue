<template>
  <div>
    <h1>Driverstandings</h1>
   <table>
      <tbody
        v-for="driver, i in driverStandings"
        :key="driver[i]">
      <tr>
        <th>Driver Code:</th>
        <td> {{ driver.Driver.code }}</td>
      </tr>
      <br>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
    name: 'DriverStandings',
    props: {
      driverStandings: Array
    },
    mounted() {
      console.log("driverStandings", this.driverStandings)
    },
    methods: {
      // getDriverPhoto() {
      //   return require(`../assets/img/drivers/${this.leaderDriver.Driver.code}.png`)
      // },
      // getConstructersPhoto() {
      //   return require(`../assets/img/constructers/${this.leaderConstructor.Constructor.constructorId}.png`)
      // }
    }
}
</script>

<style scoped>
th {
  text-align: initial;
  font-size: 0.9em;
  color: #fff;
}

td {
  text-align: end;
  width:100%;
  color: #fff;
}

</style>
