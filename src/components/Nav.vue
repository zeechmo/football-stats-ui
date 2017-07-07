<template>
  <div id="main-nav">
    <h5>{{type}} Statistics</h5>
	  <router-link v-bind:to="'/'">Combined</router-link>
	  <router-link v-bind:to="'/offense'">Offense</router-link>
	  <router-link v-bind:to="'/defense'">Defense</router-link>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  data () {
	return {
	  type: this.$route.path === '/defense' ? 'Defensive' : (this.$route.path === '/offense' ? 'Offensive' : 'Combined')
	}
  }
}
</script>

<!-- styling for the component -->
<style>
h5 {
    margin-bottom: 8px !important;
	padding-top: 8px;
}
</style>