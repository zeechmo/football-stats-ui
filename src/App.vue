<template>
  <div id="app">
  
  <fixed-nav></fixed-nav>
  
  <!-- the router outlet, where all matched components would ber viewed -->
  <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- global styling -->
<style>
#app {

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #996633;
}
.router-link-exact-active {
  color: green;
}
</style>