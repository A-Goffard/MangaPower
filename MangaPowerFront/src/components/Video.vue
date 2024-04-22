<template>
  <div class="video-container" @click="playVideo">
    <video ref="videoPlayer" class="video-player" loop>
      <source src="/video/PokemonWhithSound.mp4" type="video/mp4">
      <!-- Añade otras fuentes de video según sea necesario para la compatibilidad del navegador -->
    </video>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const videoPlayer = ref(null);

function playVideo() {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play().catch(error => {
      console.error('Error al reproducir el video:', error);
    });
  } else {
    videoPlayer.value.pause();
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%; 
  overflow: hidden;

  max-height: 100vh; 
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para cubrir todo el contenedor manteniendo la relación de aspecto */
}
</style>
