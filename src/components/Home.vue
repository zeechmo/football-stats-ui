<template>
  <div class="home">
    {{ msg }}
	<adjustedtable></adjustedtable>
  </div>
</template>

<script>

import AdjustedTable from './AdjustedTable.vue';

export default {
  name: 'home',
  data () {
    return {
	  msg: 'Stats adjusted for quality of opponents'
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
