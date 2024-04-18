<template>
  <div class="mainGameView">
    <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
    <CardPokemon v-for="pokemonId in pokemonIds" :key="pokemonId" :selectedPokemonId="pokemonId" />
  </div>
</template>

<script setup>
import CardPokemon from '../components/CardPokemon.vue';

// Obtener el array de IDs de Pokémon del localStorage o inicializarlo si no existe
let pokemonIds = JSON.parse(localStorage.getItem('pokemonIds')) || [];

// Si el array de IDs de Pokémon está vacío, generar IDs aleatorios entre 1 y 150
if (pokemonIds.length === 0) {
  generateRandomPokemonIds();
}

// Función para generar IDs de Pokémon aleatorios entre 1 y 150
function generateRandomPokemonIds() {
  // Limpiar el array de IDs de Pokémon antes de añadir nuevos
  pokemonIds = [];

  // Generar 5 IDs aleatorios entre 1 y 150
  for (let i = 0; i < 5; i++) {
    const randomPokemonId = Math.floor(Math.random() * 150) + 1;
    pokemonIds.push(randomPokemonId);
  }

  // Guardar el array actualizado en el localStorage
  localStorage.setItem('pokemonIds', JSON.stringify(pokemonIds));
}
</script>

<style scoped>
.mainGameView {
  display: flex;
  padding: 1rem;
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
}
</style>
