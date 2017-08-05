<template>
  <div id="offense">
    <main-nav></main-nav>
	<router-link v-bind:to="'/offense/2015'">2015</router-link>
	<router-link v-bind:to="'/offense/2016'">2016</router-link>
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
		<td  class="text-xs-right">{{ props.item.pointsPerGame }}</td>
		<td  class="text-xs-right">{{ props.item.adjPassYards }}</td>
		<td  class="text-xs-right">{{ props.item.passYards }}</td>
		<td  class="text-xs-right">{{ props.item.passAttemptsPerGame }}</td>
		<td  class="text-xs-right">{{ props.item.passCompletePct }}</td>
		<td  class="text-xs-right">{{ props.item.adjRushYards }}</td>
		<td  class="text-xs-right">{{ props.item.rushYards }}</td>
		<td  class="text-xs-right">{{ props.item.rushAttemptsPerGame }}</td>
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
		  { text: 'PPG', value: 'pointsPerGame' },
		  { text: 'Adjusted Pass Yards/Play', value: 'adjPassYards' },
		  { text: 'Pass Yards/Play', value: 'passYards' },
		  { text: 'Pass Attempts/Game', value: 'passAttemptsPerGame' },
		  { text: 'Completion %', value: 'passCompletePct' }, 
		  { text: 'Adjusted Rush Yards/Play', value: 'adjRushYards' },
		  { text: 'Rush Yards/Play', value: 'rushYards' },
		  { text: 'Rush Attempts/Game', value: 'rushAttemptsPerGame' }
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
		
		let url = 'http://localhost:3000/getoffensestats';
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
  #offense {
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