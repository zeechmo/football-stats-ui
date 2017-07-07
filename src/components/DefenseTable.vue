<template>
  <div id="defense">
    <main-nav></main-nav>
	<router-link v-bind:to="'/defense/2015'">2015</router-link>
	<router-link v-bind:to="'/defense/2016'">2016</router-link>
    <v-data-table
	  v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1">
      <template slot="headers" scope="props">
        <span v-tooltip:bottom="{ 'html': props.item.text }">
          {{ props.item.text }}
        </span>
      </template>
      <template slot="items" scope="props">
		<td  class="text-xs-right">{{ props.item.teamName }}</td>
		<td  class="text-xs-right">{{ props.item.wins }}</td>
		<td  class="text-xs-right">{{ props.item.losses }}</td>
		<td  class="text-xs-right">{{ props.item.predictedPPG }}</td>
		<td  class="text-xs-right">{{ props.item.predictedPPGAllowed }}</td>
		<td  class="text-xs-right">{{ props.item.adjYardsPPDiff }}</td>
		<td  class="text-xs-right">{{ props.item.adjYardsPPOff }}</td>
		<td  class="text-xs-right">{{ props.item.adjYardsPPDef }}</td>
		<td  class="text-xs-right">{{ props.item.rawYardsPPDiff }}</td>
		<td  class="text-xs-right">{{ props.item.rawYardsPPOff }}</td>
		<td  class="text-xs-right">{{ props.item.rawYardsPPDef }}</td>
        <td  class="text-xs-right">{{ props.item.playsPerGame }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  data () {
	  return {
		search: '',
		items: [],
		loading: true,
		pagination: {
          sortBy: 'fat'
        },
	
		headers: [
		  { text: 'School', value: 'teamName' },
		  { text: 'W', value: 'wins' },
		  { text: 'L', value: 'losses' },
		  { text: 'Predicted PPG', value: 'predictedPPG' },
		  { text: 'Predicted PPG Allowed', value: 'predictedPPGAllowed' },
		  { text: 'Adj. Yards/Play Diff', value: 'adjYardsPPDiff' },
		  { text: 'Adj. Yards/Play', value: 'adjYardsPPOff' },
		  { text: 'Adj. Yards/Play Allowed', value: 'adjYardsPPDef' },
		  { text: 'Yards/Play Diff', value: 'rawYardsPPDiff' },
		  { text: 'Yards/Play', value: 'rawYardsPPOff' },
		  { text: 'Yards/Play Allowed', value: 'rawYardsPPDef' },
		  { text: 'Plays/Game', value: 'playsPerGame' }
		]
	  }
	},

	watch: {
		'$route.params.year': function (year) {
			this.getDataFromApi()
				.then(response => {
				  let data = response.body
				  this.items = data.items
				  this.totalItems = data.items.length
				})
		}
    },
	mounted () {
		this.getDataFromApi()
			.then(response => {
			  let data = response.body
			  this.items = data.items
			  this.totalItems = data.items.length
			})
	},
	methods: {

	  getDataFromApi () {
		this.loading = true
		
		let url = 'http://localhost:3000/getstats';
		if(this.$route.params.year) {
		    url += '?year=' + this.$route.params.year;
		}
		
		return this.$http.get(url);
	  },
	  toggleOrder () {
        this.pagination.descending = !this.pagination.descending
      },
      nextSort () {
        let index = this.headers.findIndex(h => h.value === this.pagination.sortBy)
        index = (index + 1) % this.headers.length
        index = index === 0 ? index + 1 : index
        this.pagination.sortBy = this.headers[index].value
      }
	}
  
}
</script>

<style>
  table.table tbody td, table.table tbody th {
	height: 18px;
  }
  #defense {
      width: 90%;
	  margin-left: auto;
	  margin-right: auto;
  }
  .elevation-1 {
      box-shadow: none !important;
  }
  
  table.table tbody td:first-child, table.table tbody td:not(:first-child), table.table tbody th:first-child, table.table tbody th:not(:first-child), table.table thead td:first-child, table.table thead td:not(:first-child), table.table thead th:first-child, table.table thead th:not(:first-child) {
	padding-right: 0px;
	padding-left: 0px;
  }
  
</style>