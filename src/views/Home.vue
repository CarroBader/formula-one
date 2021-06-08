<template>
  <b-container class="default-background-center">
  <div class="row">
    <div class="col">
      <ComingRaces />
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  </b-container>
</template>     

<script>
import ComingRaces from '../components/ComingRaces'

export default {
  name: 'Home',
  components: {
    ComingRaces
  }
}
</script>

<style scoped>

</style>
