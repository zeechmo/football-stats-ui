import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/AdjustedTable'
import Offense from './components/OffenseTable'
import Defense from './components/DefenseTable'
import TeamStats from './components/TeamStats'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import StatsExplained from './components/StatsExplained'
import FixedNav from './components/FixedNav'
import Nav from './components/Nav'
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
 
Vue.use(VueRouter)
Vue.use(VueResource);
Vue.use(Vuetify)

// global config for vue-resource
//Vue.http.options.root = '/root';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.component('fixed-nav', FixedNav);
Vue.component('main-nav', Nav);

//define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/home/:year', component: Home },
  { path: '/offense', component: Offense },
  { path: '/offense/:year', component: Offense },
  { path: '/defense', component: Defense },
  { path: '/defense/:year', component: Defense },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/statsexplained', component: StatsExplained },
  { path: '/blog', component: Blog },
  { path: '/teamstats/:team', component: TeamStats }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router,
  // default vue-resource settings
  http: {
	  
  }
}).$mount('#app')//mount the router on the app