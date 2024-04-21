<template>
    <div class="cards-won-container">
      <h2>Cards Won</h2>
      <div class="card-container">
        <PokemonCard v-for="pokemon in cardsWon" :key="pokemon.name" :pokemon="pokemon" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PokemonCard from './PokemonCard.vue';
  
  const cardsWon = ref([]);
  
  const storeCard = (card) => {
    if (!cardsWon.value.some(c => c.name === card.name)) {
      cardsWon.value.push(card);
      localStorage.setItem('cardsWon', JSON.stringify(cardsWon.value));
    }
  };
  
  const loadCardsWon = () => {
    const storedCards = JSON.parse(localStorage.getItem('cardsWon')) || [];
    cardsWon.value = storedCards;
  };
  
  loadCardsWon();
  
  export { cardsWon, storeCard };
  </script>
  
  <style scoped>
  .cards-won-container {
    margin-top: 2rem;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  </style>
  