<template>
  <div id="adjusted">
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
		  { text: 'Wins', value: 'wins' },
		  { text: 'Losses', value: 'losses' },
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
		return this.$http.get('http://localhost:3000/getstats');
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
  #adjusted {
      width: 90%;
	  margin-left: auto;
	  margin-right: auto;
  }
  #adjustedtable {
	 margin: 0 auto;
  }
  .elevation-1 {
      box-shadow: none !important;
  }
  
  table.table tbody td:first-child, table.table tbody td:not(:first-child), table.table tbody th:first-child, table.table tbody th:not(:first-child), table.table thead td:first-child, table.table thead td:not(:first-child), table.table thead th:first-child, table.table thead th:not(:first-child) {
	padding-right: 0px;
	padding-left: 0px;
  }
  
</style>