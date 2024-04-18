<template>
    <div v-if="selectedPokemon" class="pokemonCard">
      <h2>{{ selectedPokemon.name }}</h2>
      <img :src="selectedPokemon.imageUrl" alt="Imagen del Pokémon">
      <div>HP: {{ selectedPokemon.hpStat }}</div>
      <div>Ataque: {{ selectedPokemon.attackStat }}</div>
      <div>Defensa: {{ selectedPokemon.defenseStat }}</div>
      <div>Tipo: {{ selectedPokemon.types.join(', ') }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const selectedPokemonId = ref(1); // ID del Pokémon que deseas mostrar
  const selectedPokemon = ref(null);
  
  const fetchPokemonData = async (pokemonId) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };
  
  const initPokemonData = async () => {
    try {
      const data = await fetchPokemonData(selectedPokemonId.value);
      if (data) {
        selectedPokemon.value = {
          name: data.name,
          imageUrl: data.sprites.other['official-artwork'].front_default,
          types: data.types.map(type => type.type.name),
          hpStat: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
          attackStat: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
          defenseStat: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
        };
      }
    } catch (error) {
      console.error('Error initializing Pokemon data:', error);
    }
  };
  
  onMounted(initPokemonData);
  </script>
  
  <style scoped>
  .pokemonCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem;
    background-color: rgba(255, 0, 0, 0.65);
    border-radius: 1.6rem;
    color: white;
    text-shadow: 2px 2px 2px black;
    padding-top: 0.5rem;
    width: 18rem;
    height: 26rem;
  }

  img {
    width: 16rem;
  }
  .pokemonCard img {
    max-width: 20rem;
  }
  </style>
  