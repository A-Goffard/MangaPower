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
</style>
