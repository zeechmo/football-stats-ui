import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
 
Vue.use(VueRouter)
Vue.use(VueResource);
Vue.use(Vuetify)

// global config for vue-resource
//Vue.http.options.root = '/root';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.component('main-nav', Nav);

//define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
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