<template>
  <div :class="{ pokemonCard: true, selected: isSelected }" v-if="pokemon">
    <!-- Utiliza un método para capitalizar el nombre -->
    <h2>{{ getCapitalizedPokemonName() }}</h2>
    <img :src="pokemon.imageUrl" alt="Imagen del Pokémon">
    <div>HP: {{ pokemon.hpStat }}</div>
    <div>Attack: {{ pokemon.attackStat }}</div>
    <div>Defense: {{ pokemon.defenseStat }}</div>
    <div>Type: {{ pokemon.types.join(', ') }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

// Definir props
const props = defineProps({
  pokemon: Object,
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

// Método para capitalizar el nombre del Pokémon
const getCapitalizedPokemonName = () => {
  if (pokemon.value) {
    return pokemon.value.name.charAt(0).toUpperCase() + pokemon.value.name.slice(1);
  } else {
    return '';
  }
};
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
  max-width: 18rem;
  max-height: 26rem;
  font-size: 0.8rem;
}

img {
  width: 10rem;
}

.pokemonCard img {
  max-width: 20rem;
}

.selected {
  border: 2px solid blue; /* Cambia el color del borde cuando está seleccionada */
}
</style>
