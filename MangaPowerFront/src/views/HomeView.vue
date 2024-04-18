<template>
  <div class="mainDivHome">
    <div class="logo">
      <img class="logoimage" src="logo.png" alt="">
    </div>
    <div class="video">
      <Video />
    </div>
    <div class="footer">
      <h3>Footer</h3>
    </div>
  </div>
</template>

<script setup>
import Video from '../components/Video.vue'
</script>

<style>

.mainDivHome {
  height: auto; /* Ajustar la altura automáticamente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-attachment: fixed; /* Fija el fondo */
}
.logoimage {
  width: 100%;
}
.logo {
  max-width: 30rem;
  width: 70%;
  padding: 0rem 1rem;
  margin: 1rem;
  background-color: rgb(255, 255, 255, 0.65);
  border-radius: 0.5rem;
}

.video {
  max-width: 70rem;
  width: 75%;
  padding: 2rem;
  background-color: rgb(255, 255, 255, 0.65);
  border-radius: 0.5rem;
  margin: 2rem;
}
</style>
