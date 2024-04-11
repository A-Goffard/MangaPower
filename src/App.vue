<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'


</script>

<template>

<NavBar/>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;

}
</style>
