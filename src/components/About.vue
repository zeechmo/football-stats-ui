<template>
  <div id="about">
    <p>College football seasons are short, at least statistically.  Most teams have 12 game schedules, with an optional bowl game or 2 game playoff.
    A teams strength of schedule can often mislead how good or bad a team really is, especially given the small sample size.
    The goal of adjusting stats for quality of opponent is to level the teams true projected ability based on the stats they produced against their competition.</p>
	<p>
	There is an existing notion of adjusted passing yards already.  However typically it is simply factoring in touchdowns and interceptions.
	I think it is important to recognize that, and generally like the numbers associated with that adjustment (+20 yards/touchdown, -40 yards/interception).
	However, the more important adjustment is the quality of opponents.  If a team puts up 10 yards/play averaged across its first 3 games but played
	one Division II opponent, and two non-power conference defenses who allow about 10 yards/play to most teams, we might be mislead about how
	good this team really is.
	</p>
	<p>
	That is the purpose of this site, to consider quality of opposition when determining a teams effectiveness.
	</p>
	
  </div>
</template>

<script>
export default {
  name: 'about'
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