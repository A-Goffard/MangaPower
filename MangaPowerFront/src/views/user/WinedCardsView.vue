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
import Logo from '@/components/Logo.vue'
import CardPokemon from '@/components/CardPokemon.vue';
import { ref, onMounted } from 'vue';

// Obtener los IDs de las cartas Pokémon guardadas en localStorage
const winedPokemonIds = ref([]);

// Lógica para recuperar los IDs del localStorage
onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.winedCards) {
    winedPokemonIds.value = user.winedCards;
  }
});

</script>

<style scoped>

.mainGameView {
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-size: cover; 
background-repeat: no-repeat; 
background-image: url('/public/backgrounds/Backgroundacuarela.jpg');
background-attachment: fixed;
}
.pokemonContainer {
  margin: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  width: 85%;
}
</style>
