<template>
    <div class="video-container">
      <video ref="videoPlayer" class="video-player" @click="stopToggle" loop autoplay muted>
        <source src="/video/PokemonWhithSound.mp4" type="video/mp4">
        <!-- Añade otras fuentes de video según sea necesario para la compatibilidad del navegador -->
      </video>
      
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const videoPlayer = ref(null);
  const isPlaying = ref(true); // Variable reactiva para controlar si el video está reproduciéndose o no
  
  onMounted(() => {
    // Comienza la reproducción del video cuando el componente se monta
    playVideo();
  });
  
  onUnmounted(() => {
    // Detén la reproducción del video cuando el componente se desmonta
    stopVideo();
  });
  
  // Función para reproducir el video
  function playVideo() {
    if (videoPlayer.value && isPlaying.value) {
      videoPlayer.value.play().catch(error => {
        // Captura cualquier error de reproducción
        console.error('Error al reproducir el video:', error);
      });
    }
  }
  
  // Función para detener el video
  function stopVideo() {
    if (videoPlayer.value) {
      videoPlayer.value.pause();
    }
  }
  
  // Función para alternar entre reproducir y detener el video
  function stopToggle() {
    // Cambia el estado de isPlaying
    isPlaying.value = !isPlaying.value;
  
    if (isPlaying.value) {
      playVideo();
    } else {
      stopVideo();
    }
  }
  </script>
  
  
  
  <style scoped>
  .video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* Proporción 16:9 para hacerlo responsive */
    overflow: hidden;
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
  