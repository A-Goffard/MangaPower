<template>
  <div>
    <h1>DETAIL CARD</h1>
    <div v-if="pokemon">
      <div>
        <strong>ID:</strong> {{ pokemon.id }}
      </div>

      <div>
        <strong>Name:</strong> {{ pokemon.name }}
      </div>

      <div>
        <strong>Abilities:</strong> {{ pokemon.abilities }}
      </div>

      <div>
        <strong>Image:</strong> <img :src="pokemon.image" :alt="pokemon.name">
      </div>
      <!-- Mostrar más detalles de la carta aquí -->
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const pokemon = ref(null);
const route = useRoute();

const fetchPokemonData = async (pokemonId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    pokemon.value = {
      id: response.data.id,
      name: response.data.name,
      abilities: response.data.abilities.map(ability => ability.ability.name).join(', '),
      image: response.data.sprites.front_default
    };
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
};

onMounted(() => {
  fetchPokemonData(route.params.id);
});
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
