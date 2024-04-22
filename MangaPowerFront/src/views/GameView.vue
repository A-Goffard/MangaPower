<template>
  <div class="mainGameView">

    <button class="start" @click="goToSelectPokemon">Start</button>


  </div>
</template>


<script setup>

import { useRouter } from 'vue-router';

// Obtener el objeto router
const router = useRouter();

// Función para navegar a la vista de selección de Pokémon
const goToSelectPokemon = () => {
  router.push('/game/selectcards');
};
</script>


<style scoped>
.mainGameView {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
}

.start {
  margin: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  background-color: red;
  width: 20rem;
  height: 5rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
