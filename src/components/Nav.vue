<template>
  <div id="main-nav">
    <h3>Football Projections</h3>
	  <router-link v-bind:to="'/'">Home</router-link>
	  <router-link v-bind:to="'/about'">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'main-nav'
}
</script>

<!-- styling for the component -->
<style>
</style>