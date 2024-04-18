<template>
  <div class="mainGameView">

    <div class="button-container">
      <button class="battle-button" @click="startBattle">Start Battle</button>
      <button class="reset-button" @click="resetGame">Reset Game</button>
    </div>

    <div class="game-container">

      <div class="player-cards">
        <h2>Your Cards</h2>
        <div class="card-container" v-for="pokemon in playerCards" :key="pokemon.name" @click="selectPlayerCard(pokemon)">
          <PokemonCard :pokemon="pokemon" />
        </div>
      </div>

      <div class="computer-cards">
        <h2>Computer's Cards</h2>
        <div class="card-container" v-for="pokemon in computerCards" :key="pokemon.name">
          <PokemonCard :pokemon="pokemon" />
        </div>
      </div>

      <div class="winner-display" v-if="winner">
        <h2>Winner</h2>
        <PokemonCard :pokemon="winner" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PokemonCard from '../components/PokemonCard.vue';

const pokemonList = ref([]);
const playerCards = ref([]);
const computerCards = ref([]);
const winner = ref(null);

const mostrarPokemon = (data) => {
  pokemonList.value = data;
};

const getRandomCards = (count) => {
  const shuffled = pokemonList.value.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const selectPlayerCard = (selectedCard) => {
  const computerCard = computerCards.value[Math.floor(Math.random() * computerCards.value.length)];

  // Compare selected card and computer card based on HP, Attack, and Defense
  const playerScore = selectedCard.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
  const computerScore = computerCard.stats.reduce((acc, stat) => acc + stat.base_stat, 0);

  winner.value = playerScore > computerScore ? selectedCard : computerCard;
};

const startBattle = () => {
  selectPlayerCard(playerCards.value[Math.floor(Math.random() * playerCards.value.length)]);
};

const resetGame = () => {
  winner.value = null;
  playerCards.value = getRandomCards(3);
  computerCards.value = getRandomCards(3);
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const fetchPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await response.json();

    // Fetch detailed data for each Pokemon
    const pokemonPromises = data.results.map(pokemon => fetch(pokemon.url).then(response => response.json()));

    Promise.all(pokemonPromises)
      .then(detailedPokemon => {
        mostrarPokemon(detailedPokemon);
        playerCards.value = getRandomCards(3);
        computerCards.value = getRandomCards(3);
      });
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
  }
};

onMounted(() => {
  fetchPokemon();
});
</script>

<style scoped>
.mainGameView {
  height: 100vh;
  background-image: url('/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.battle-button,
.reset-button {
  width: 200px; /* Increased width */
  height: 60px; /* Increased height */
  font-size: 1.2em;
  margin: 0 10px; /* Added margin to separate buttons */
  background-color: #ffcc00;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.battle-button:hover,
.reset-button:hover {
  background-color: #e6b800;
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

.card-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.winner-display {
  margin-top: 20px;
}
</style>



