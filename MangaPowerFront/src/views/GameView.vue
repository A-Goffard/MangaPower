<template>
  <div class="mainGameView">

    <div class="game-container">
      <h1>Batalla Pokemon</h1>

      <!-- Player's cards -->
      <div class="player-cards">
        <h2>Tus cartas:</h2>
        <div class="card-list">
          <div v-for="card in playerCards" :key="card.name" @click="selectPlayerCard(card)">
            <!-- Reusing the Card component -->
            <Card :pokemon="card" />
          </div>
        </div>
      </div>

      <!-- Computer's cards -->
      <div class="computer-cards">
        <h2>Cartas de tu enemigo AI</h2>
        <div class="card-list">
          <div v-for="card in computerCards" :key="card.name">
            <!-- Reusing the Card component -->
            <Card :pokemon="card" />
          </div>
        </div>
      </div>

      <!-- Battle button -->
      <button @click="battle">Battle!</button>

      <!-- Winner display -->
      <div v-if="winner" class="winner-display">
        <h2>Ganador: {{ winner.name }}</h2>
        <!-- Display the winner card -->
        <Card :pokemon="winner" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Card from './Cards.vue'; // Importing cards from ./Cards.vue

const playerCards = ref([]);
const computerCards = ref([]);
const selectedPlayerCard = ref(null);
const winner = ref(null);

const selectPlayerCard = (card) => {
  selectedPlayerCard.value = card;
};

const battle = () => {
  if (selectedPlayerCard.value) {
    // Determine the winner
    determineWinner();
  } else {
    alert('Please select a card to battle!');
  }
};

const determineWinner = () => {
  const playerCard = selectedPlayerCard.value;
  const computerCard = computerCards.value[Math.floor(Math.random() * computerCards.value.length)];

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

</script>

<style scoped>
.mainGameView {
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%; /* Adjust as needed */
}

.player-cards,
.computer-cards {
  width: 45%;
  padding: 20px;
  box-sizing: border-box;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin-bottom: 20px;
}

.winner-display {
  margin-top: 20px;
}
</style>
