<template>
  <div id="teamstats">
    Team Stats: {{ team }}
  </div>
</template>

<script>
export default {
  data () {
	  return {
		team: this.$route.params.team
	  }
  }
}  
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
}
</style>