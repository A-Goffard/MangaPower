<template>
  <div :class="{ pokemonCard: true, selected: isSelected }" v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.imageUrl" alt="Imagen del Pokémon">
    <div>HP: {{ pokemon.hpStat }}</div>
    <div>Ataque: {{ pokemon.attackStat }}</div>
    <div>Defensa: {{ pokemon.defenseStat }}</div>
    <div>Tipo: {{ pokemon.types.join(', ') }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Definir props
const props = defineProps({
  selectedPokemonId: Number,
  isSelected: Boolean
});

// Definir ref para almacenar los datos del Pokémon seleccionado
const pokemon = ref(null);

// Función para obtener los datos del Pokémon a partir de su ID
const fetchPokemonData = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
};

// Cargar los datos del Pokémon seleccionado al montar el componente
onMounted(async () => {
  const data = await fetchPokemonData(props.selectedPokemonId);
  if (data) {
    pokemon.value = {
      name: data.name,
      imageUrl: data.sprites.other['official-artwork'].front_default,
      types: data.types.map(type => type.type.name),
      hpStat: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
      attackStat: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
      defenseStat: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
    };
  }
});
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

.selected {
  border: 2px solid blue; /* Cambia el color del borde cuando está seleccionada */
}
</style>
