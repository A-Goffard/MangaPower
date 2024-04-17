<template>
  <h1>DETAIL CARD</h1>
    
      
      <div v-if="pokemon">
       <div class="id">
        <h2><strong>ID:</strong></h2>{{ pokemon.id }}
       </div>

       <div class="name">
        <h2><strong>Name:</strong></h2>{{ pokemon.name }}
       </div>

      <!--  <div class="type">
        <h2><strong>Type:</strong></h2>{{ pokemon.types.0.type.name }}
        </div>
 -->
       <div class="ability">
        <h2><strong>Abilities:</strong></h2>{{ pokemon.abilities }}
        </div>

        <div class="base_experience">
        <h2><strong>Base experience:</strong></h2>{{ pokemon.base_experience }}
        </div>

         <div class="image">
          <img :src="pokemon.image" :alt="pokemon.name">
         </div>
      <!-- Mostrar más detalles de la carta aquí -->
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
      image: response.data.sprites.other['official-artwork'].front_default, 
      base_experience: response.data.base_experience,
     /*  types: response.data.types.0.type.name, */
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

.container1{
  width: 100%;
    height: 50rem;
    background-image: url('/public/images/Batalla_Pokemon.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

img{
  height: 30rem;
}

</style>
