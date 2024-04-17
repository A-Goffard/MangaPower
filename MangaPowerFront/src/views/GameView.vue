<template>
  <div class="mainGameView">



  </div>
</template>



<script setup>

/* import { ref, onMounted } from 'vue';
import Card from './CardStore.vue';

const playerCards = ref([]);
const computerCards = ref([]);
const selectedCard = ref(null);
const winner = ref(null);

const selectPlayerCard = (card) => {
  selectedCard.value = card;
};

const battle = () => {
  if (selectedCard.value) {
    // Generate a random card for the computer
    generateComputerCard();

    // Determine the winner
    determineWinner();
  } else {
    alert('Please select a card to battle!');
  }
};

const generateComputerCard = () => {
  const randomIndex = Math.floor(Math.random() * computerCards.value.length);
  computerCards.value[randomIndex].isComputerCard = true;
};

const determineWinner = () => {
  const playerCard = selectedCard.value;
  const computerCard = computerCards.value.find(card => card.isComputerCard);

  const playerStats = calculateStats(playerCard);
  const computerStats = calculateStats(computerCard);

  let playerScore = 0;
  let computerScore = 0;

  ['hp', 'attack', 'defense'].forEach(stat => {
    if (playerStats[stat] > computerStats[stat]) {
      playerScore++;
    } else if (playerStats[stat] < computerStats[stat]) {
      computerScore++;
    }
  });

  if (playerScore > computerScore) {
    winner.value = playerCard;
  } else if (playerScore < computerScore) {
    winner.value = computerCard;
  } else {
    winner.value = null; // It's a tie
  }
};

const calculateStats = (pokemon) => {
  return {
    hp: pokemon.stats.hp,
    attack: pokemon.stats.attack,
    defense: pokemon.stats.defense,
  };
};

onMounted(() => {
  // Assuming you have fetched allPokemons from your existing carousel component
  playerCards.value = [...allPokemons.value];
  computerCards.value = generateRandomCards(5);
});

const generateRandomCards = (count) => {
  const allPokemons = [...playerCards.value];
  const randomCards = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * allPokemons.length);
    randomCards.push(allPokemons[randomIndex]);
    allPokemons.splice(randomIndex, 1);
  }

  return randomCards;
};
 */


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

// Mount the Vue app to a DOM element
app.mount('#app');
 */

</script>



<style scoped>
.mainGameView {
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
}

/* .player-cards,
.computer-cards {
  width: 50%;
  float: left;
  padding: 20px;
  box-sizing: border-box;
}
.player-cards {
  border-right: 2px solid white;
}
.computer-cards {
  border-left: 2px solid white;
}
.card {
  margin-bottom: 20px;
} */
</style>