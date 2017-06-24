<template>
  <div id="app">
  
  <main-nav></main-nav>
  
  <!-- the router outlet, where all matched components would ber viewed -->
  <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- styling for the component -->
<style>
#app {

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>