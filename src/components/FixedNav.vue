<template>
  <div id="fixed-nav">
    <span class="fixedNavHeader">Football Projections</span>
	<span class="fixedNavLink"><router-link v-bind:to="'/'">Stats</router-link></span>
	<span class="fixedNavLink"><router-link v-bind:to="'/statsexplained'">Stat Explanations</router-link></span>
	<span class="fixedNavLink"><router-link v-bind:to="'/blog'">Blog</router-link></span>
	<span class="fixedNavLink"><router-link v-bind:to="'/about'">About</router-link></span>
	<span class="fixedNavLink"><router-link v-bind:to="'/contact'">Contact</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'fixed-nav'
}
</script>

<!-- styling for the component -->
<style>
#fixed-nav {
    height: 45px;
	position: fixed;
	top: 0px;
	overflow: hidden;
	width: 100%;
	padding-left: 5%;
	background-color: #f4f4f4;
	text-align: left;
}
.fixedNavHeader {
	margin-bottom: 0px;
	color: #996633;
	font-size: 30px;
	font-family: impact;
}
.fixedNavLink {
    margin-left: 18px;
	vertical-align: 5px;
}
</style>