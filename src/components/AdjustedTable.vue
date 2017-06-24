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
        <td  class="text-xs-right">{{ props.item.schoolRefName }}</td>
        <td  class="text-xs-right">{{ props.item.passYards }}</td>
		<td  class="text-xs-right">{{ props.item.passYardsAllowed }}</td>
		<td  class="text-xs-right">{{ props.item.rushYards }}</td>
		<td  class="text-xs-right">{{ props.item.rushYardsAllowed }}</td>
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
		  { text: 'School', value: 'schoolRefName' },
		  { text: 'Pass Yards', value: 'passYards' },
		  { text: 'Pass Yards Allowed', value: 'passYardsAllowed' },
		  { text: 'Rush Yards', value: 'rushYards' },
		  { text: 'Rush Yards Allowed', value: 'rushYardsAllowed' }
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

<style scoped>
  table.table tbody td, table.table tbody th {
	height: 18px;
  }
  #adjusted {
      width: 100%;
  }
  #adjustedtable {
	 margin: 0 auto;
  }
</style>