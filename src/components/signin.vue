<template>
<div class="login-area">
  <div class="row">
      <div class="signup-panel">
        <form>
        <p class="welcome"> Sign in using this form</p>
          <div class="row collapse">
            <div class="small-2 columns">
              <span class="prefix"><i class="fi-mail"></i></span>
            </div>
            <div class="small-10  columns">
              <input v-model="username" type="text" placeholder="Enter your email address here">
            </div>
          </div>
          <div class="row collapse">
            <div class="small-2 columns ">
              <span class="prefix"><i class="fi-lock"></i></span>
            </div>
            <div class="small-10 columns ">
              <input v-model="password" type="password" placeholder="Enter password here">
            </div>
          </div>
        </form>
        <a @click.prevent="login" class="button ">Sign In! </a>
         <p>Dont have an account yet? <router-link to = "/signup">Signup here</router-link></p>
      </div>
   </div>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () {
        console.log (this.username, this.password)

        const API = 'http://test-routes.herokuapp.com';

        Vue.http.post(API+'/auth/register',
         {
          username: this.username,
          password: this.password
         }).then(function (response) {

           localStorage.setItem ('token', response.data.token);

           console.log(localStorage.getItem('token'))

         }, function (response) {


           console.log('Please use correct details')
         })


    }
  },
  mounted () {

  }
}
</script>

<styles> 

</styles>
