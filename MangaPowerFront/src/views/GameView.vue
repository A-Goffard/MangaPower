<template>
  <div class="mainGameView">
    <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
    <CardPokemon v-for="pokemonId in pokemonIds" :key="pokemonId" :selectedPokemonId="pokemonId" />
  </div>
</template>

<script setup>

import CardPokemon from '../components/CardPokemon.vue';
import { ref } from 'vue';

/* Aqui hay que poner 10 cartas aleatorias para que seleccione 5 */

</script>

<style scoped>
.mainGameView {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
}
</style>
