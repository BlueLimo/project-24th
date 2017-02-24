<template>
  <!-- Medium-Up Navigation -->
  <nav class="top-bar" id="nav-menu">
    <!-- Left Nav Section -->
    <div class="top-bar-left">
      <ul class="vertical medium-horizontal menu">
      <li class="brand-name">The Store</li>
        <li style="border-left: 1px ridge #eef; border-right: 1px ridge #eef; border-top: 1px ridge #eef;"><router-link to="/">Home</router-link></li>
        <li style="border-left: 1px ridge #eef; border-right: 1px ridge #eef; border-top: 1px ridge #eef;"><router-link to="/signin">Login</router-link></li>
        <li style="border-right: 1px ridge #eef; border-top: 1px ridge #eef;"><a href="'signin'">Dashboard</a></li>
      </ul>
     
    </div>
    
    <!-- Right Nav Section -->
    <div class="top-bar-right">
      <ul class="vertical medium-horizontal menu">
        <li><a href="#">My Account</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'header'
  
}
</script>

