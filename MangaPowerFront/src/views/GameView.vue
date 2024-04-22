<template>
  <div class="mainGameView">

    <div class="button-container">
      <button class="battle-button" @click="startBattle">Start Battle</button>
      <button class="reset-button" @click="resetGame">Reset Game</button>
    </div>

    <div class="game-container">

      <div class="player-cards">
        <h2>Your Cards</h2>
        <div class="card-container">
          <PokemonCard v-for="pokemon in playerCards" :key="pokemon.name" :pokemon="pokemon"
            :selected="selectedPlayerCard === pokemon" :isWinner="winner === pokemon"
            :randomSelected="randomComputerCard === pokemon" @click="selectPlayerCard(pokemon)" />
        </div>
      </div>

      <div class="computer-cards">
        <h2>Computer's Cards</h2>
        <div class="card-container">
          <PokemonCard v-for="pokemon in computerCards" :key="pokemon.name" :pokemon="pokemon"
            :isWinner="winner === pokemon" :randomSelected="randomComputerCard === pokemon"
            :highlight="randomComputerCard === pokemon" />
        </div>
      </div>

    </div>

    <div class="winner-display" v-if="winner">
      <h2>Winner</h2>
      <PokemonCard :pokemon="winner" />
    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
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

const playerCards = ref([]);
const computerCards = ref([]);
const winner = ref(null);
const randomComputerCard = ref(null);
let selectedPlayerCard = ref(null);

const selectPlayerCard = (pokemon) => {
  selectedPlayerCard.value = pokemon;
};

const startBattle = () => {
  console.log('Starting battle...');
  if (!selectedPlayerCard.value) {
    alert('Please select a card before starting the battle!');
    return;
  }

  // Highlight computer cards one by one at a velocity of 1 second per card for 10 seconds
  let index = 0;
  let intervalDuration = 1000; // Start with 1 second interval
  const totalDuration = 10000; // Total 10 seconds

  const highlightInterval = setInterval(() => {
    randomComputerCard.value = computerCards.value[index];
    index++;

    if (index >= computerCards.value.length) {
      index = 0;
    }
  }, intervalDuration);

  // Stop highlighting after 10 seconds
  setTimeout(() => {
    clearInterval(highlightInterval);

    // Randomly select a card from the computer cards
    const randomIndex = Math.floor(Math.random() * computerCards.value.length);
    const computerCard = computerCards.value[randomIndex];
    randomComputerCard.value = computerCard;

    const playerTotalStats = getTotalStats(selectedPlayerCard.value);
    const computerTotalStats = getTotalStats(computerCard);

    if (playerTotalStats.total > computerTotalStats.total) {
      winner.value = selectedPlayerCard.value;
    } else if (playerTotalStats.total < computerTotalStats.total) {
      winner.value = computerCard;
    } else {
      winner.value = null; // Draw
    }

    console.log('Winner:', winner.value);
  }, totalDuration);
};

const getTotalStats = (pokemon) => {
  const total = pokemon.stats.reduce((total, stat) => {
    if (['hp', 'attack', 'defense'].includes(stat.stat.name)) {
      total += stat.base_stat;
    }
    return total;
  }, 0);

  return { total };
};


const resetGame = () => {
  selectedPlayerCard.value = null;
  winner.value = null;
  pokemonList.value = []; // Clear pokemonList
  playerCards.value = []; // Clear playerCards
  computerCards.value = []; // Clear computerCards
  fetchPokemon(); // Fetch new cards
};

const fetchPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await response.json();

    const pokemonPromises = data.results.map(pokemon => fetch(pokemon.url).then(response => response.json()));

    Promise.all(pokemonPromises)
      .then(detailedPokemon => {
        mostrarPokemon(detailedPokemon);
        const shuffledPokemon = [...detailedPokemon].sort(() => Math.random() - 0.5);
        playerCards.value = shuffledPokemon.slice(0, 4);
        computerCards.value = shuffledPokemon.slice(4, 8);
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
  justify-content: flex-start;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.battle-button,
.reset-button {
  width: 200px;
  height: 60px;
  font-size: 1.2em;
  margin: 0 10px;
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
}

.player-cards,
.computer-cards {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  /* Prevent cards from wrapping to the next line */
  overflow-x: auto;
  gap: 10px;
}

.selected-card {
  border: 2px solid #ffcc00;
  /* Border color for selected card */
  box-shadow: 0 0 8px rgba(255, 204, 0, 0.5);
  /* Box shadow for selected card */
}

/* Adjusted dimensions for the cards */
.pokemon-card {
  width: 100%;
  /* Reduced width */
  height: 100%;
  /* Reduced height */
  /* ... other styles ... */
}

/* ... Remaining styles ... */

.winner-display {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .game-container {
    flex-direction: column;
    align-items: center;
  }

  .player-cards,
  .computer-cards {
    width: 100%;
    margin-bottom: 20px;
  }
}

</style>
