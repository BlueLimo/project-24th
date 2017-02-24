<template>
<div class="login-area">
  <div class="row">
    <div class="large-6 columns">
      <div class="signup-panel">
        <p class="welcome"> Sign in using this form</p>
        <form>
          <div class="row collapse">
            <div class="small-2 columns">
              <span class="prefix"><i class="fi-mail"></i></span>
            </div>
            <div class="small-10  columns">
              <input v-model="user.username" type="text" placeholder="Enter your email address here">
            </div>
          </div>
          <div class="row collapse">
            <div class="small-2 columns ">
              <span class="prefix"><i class="fi-lock"></i></span>
            </div>
            <div class="small-10 columns ">
              <input v-model="user.password" type="password" placeholder="Enter password here">
            </div>
          </div>
        </form>
        <a @click.prevent="signupUser" class="button ">Sign Up! </a>
         <p>Dont have an account yet? <router-link to = "/signin">Signup here</router-link></p>
      </div>
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

    	user: 
    	{
    		username: null,
      		password: null
    	}
      
    }
  },
  methods: {
    signupUser () 
    {
        console.log (this.username, this.password)


        Vue.http.post('https://vuetesting-c9c05.firebaseio.com/data.json', this.user)
        .then(function (response) 
        {
        	console.log(response);

           // localStorage.setItem ('token', response.data.token);

           // console.log(localStorage.getItem('token'))

         }, function (error) {
          

           console.log('Please use correct details', response)
         })


    }
  },
  mounted () {

  }
}
</script>

<styles> 

</styles>
