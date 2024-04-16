<template>
    <div class="mainGameView">

    </div>
  </template>
  


  <script setup>
/*
  // Define a Vue 3 component for the game
const app = Vue.createApp({
  data() {
    return {
      player1Card: null,
      player2Card: null,
      winner: null,
      pokemonCards: [
        { name: 'Pikachu', hp: 35, attack: 55, defense: 40 },
        { name: 'Charmander', hp: 39, attack: 52, defense: 43 },
        // Add more Pokemon cards here
      ]
    };
  },
  methods: {
    // Function to randomly select a card for a player
    selectRandomCard() {
      return Math.floor(Math.random() * this.pokemonCards.length);
    },
    // Function to start the game
    startGame() {
      this.player1Card = this.pokemonCards[this.selectRandomCard()];
      this.player2Card = this.pokemonCards[this.selectRandomCard()];
      
      // Compare stats and determine winner
      if (this.player1Card.hp > this.player2Card.hp) {
        this.winner = 'Player 1';
      } else if (this.player2Card.hp > this.player1Card.hp) {
        this.winner = 'Player 2';
      } else {
        this.winner = 'Draw';
      }
    }
  }
});
*/
// Mount the Vue app to a DOM element
app.mount('#app');


  </script>
  


  <style scoped>
  .mainGameView {
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
}
  
  </style>