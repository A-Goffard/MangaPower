<template>
  <div class="mainDivHome">
    <Logo class="logo"/>
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
import Logo from '../components/Logo.vue'
</script>

<style>
.logo {
  position: absolute;
  top: 1rem;
}
.mainDivHome {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
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
