<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LateralNavBar from './components/LateralNavBar.vue';
</script>

<template>
<div>
<LateralNavBar />
<router-view />
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
h1 {
  margin: 1rem;
}
</style>
