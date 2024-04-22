<template>
  <div>
    <div class="botonesTypes">
      <!-- Your type buttons here -->
    </div>

    <div class="cartasPage">
      <div v-for="type in types" :key="type" :id="'Cards' + capitalize(type)">
        <PokemonCard 
          v-for="pokemon in filteredPokemon(type)" 
          :key="pokemon.name"
          :pokemon="pokemon"
        />
      </div>
    </div>

    <!-- Debugging -->
    <pre>{{ pokemonList }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PokemonCard from '../components/PokemonCard.vue';

const pokemonList = ref([]);
const types = [
  'fire', 'water', 'grass', 'electric', 
  'fighting', 'poison', 'ground', 'flying', 
  'psychic', 'bug', 'rock', 'normal', 'steel'
];

const mostrarPokemon = (data) => {
  pokemonList.value = data;
};

const filteredPokemon = (type) => {
  return pokemonList.value ? pokemonList.value.filter(pokemon => 
    pokemon.types.some(p => p.type.name === type.toLowerCase())) 
    : [];
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Fetch detailed data for each Pokemon
    const pokemonPromises = data.results.map(pokemon => fetch(pokemon.url).then(response => response.json()));

    Promise.all(pokemonPromises)
      .then(detailedPokemon => {
        // Update pokemonList with detailed data
        mostrarPokemon(detailedPokemon);
      });
  })
  .catch(error => console.log(error));
</script>

<style scoped>
.cartasPage {

  margin: auto;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.botonesTypes {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}

button {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: none;
  outline: none;
  color: white;
  font-weight: 700;
  text-shadow: 1px 1px 1px black;
  font-size: 0.9rem;
}

.fire {
  background-color: orangered;
}

.water {
  background-color: #6390f0;
}

.grass {
  background-color: #78c850;
}

.electric {
  background-color: #f8d030;
}

.psychic {
  background-color: #ff69b4;
}

.fighting {
  background-color: #c03028;
}

.bug {
  background-color: #a8b820;
}

.rock {
  background-color: #b8a038;
}

.steel {
  background-color: #b8b8d0;
}

.ground {
  background-color: #e0c068;
}

.flying {
  background-color: #a890f0;
}

.normal {
  background-color: #898176;
}

.poison {
  background-color: #a040a0;
}
</style>



