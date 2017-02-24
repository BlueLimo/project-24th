//calling the style sheets
require("./assets/css/foundation.css");
require("./assets/css/app.css");

//importing the components
import Vue from 'vue'
import App from './App'
import router from './router'
import header from './components/header'

//creating the components
Vue.component('header-section', header)	

new Vue(
{
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

