<template>
  <div class="home">
    <h1>{{ msg }}</h1>
	<adjustedtable></adjustedtable>
  </div>
</template>

<script>

import AdjustedTable from './AdjustedTable.vue';

export default {
  name: 'home',
  data () {
    return {
	  msg: 'Welcome to Your Football Vue.js App'
    }
  },
  components: {
	'adjustedtable': AdjustedTable
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 24px;
}
</style>
