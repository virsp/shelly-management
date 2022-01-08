<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
       <b-navbar-brand href="#">Shelly management</b-navbar-brand>
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
       <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
           <b-nav-item><router-link tag="li" to="/home">Home</router-link></b-nav-item>
           <b-nav-item><router-link tag="li" to="/about">About</router-link></b-nav-item>
           <b-nav-item><router-link tag="li" to="/dashboard">Dashboard</router-link></b-nav-item>
         </b-navbar-nav>
       </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view/>

    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
   /* background-color: rgb(52, 159, 201); */
   font-weight: bolder;
   
   cursor: pointer;
 }
</style>
