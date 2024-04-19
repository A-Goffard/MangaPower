<template>
    <div class="mainGameView">
        <Logo class="logo"/>
        <div class="pokemonContainer">
      <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
      <CardPokemon v-for="pokemonId in pokemonIds" :key="pokemonId" :selectedPokemonId="pokemonId" />

        </div>
    </div>
  </template>
  
  <script setup>
  import Logo from '../components/Logo.vue'
  import CardPokemon from '../components/CardPokemon.vue';
  import { ref } from 'vue';
  
  // Definir el rango de IDs de Pokémon que deseas mostrar (del 1 al 150)
  const minPokemonId = 1;
  const maxPokemonId = 151;
  
  // Generar un array con los IDs de Pokémon en el rango especificado
  const pokemonIds = ref([]);
  for (let i = minPokemonId; i <= maxPokemonId; i++) {
    pokemonIds.value.push(i);
  }
  
  </script>
  
  <style scoped>
  .mainGameView {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    height: 100vh;
    background-image: url('/public/backgrounds/Backgroundacuarela.jpg');
  }
  .pokemonContainer {
    margin: 10rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    width: 85%;
  }
  </style>
  