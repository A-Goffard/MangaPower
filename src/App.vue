<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/loging">Loging</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/personal">Personal Profile</router-link> |
    <router-link to="/stats">Stats</router-link> |
    <router-link to="/galery">Galery</router-link> |
    <router-link to="/game">Game</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
