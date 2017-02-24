
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import home from 'components/home'
import signin from 'components/signin'
import signup from 'components/signup'

Vue.use(VueResource)
Vue.use(Router)

//setting up routing and matching routes to components

export default new Router(
{
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
