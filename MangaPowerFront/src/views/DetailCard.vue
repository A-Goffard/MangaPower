<template>
    <h1>DETAIL CARD</h1>
    <div class="container1">
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
h1 {
  text-align: center;
}
.container1{
  background-image: url('/public/images/plantilla_psiquico 2.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
}
.id{
  background-color: blueviolet;
}
.name{
  background-color: aquamarine;
}
.ability{
  background-color: blue;
}

img{
  height: 30rem;
}

</style>
