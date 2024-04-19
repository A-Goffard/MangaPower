<template>
  <div class="mainGameView">
    <div v-if="showMessage" class="messageContainer">
      <div class="message">¡Select five cards!</div>
    </div>

    <div class="cardsContainer">
      <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
      <CardPokemon v-for="pokemonId in pokemonIds" :key="pokemonId" :selectedPokemonId="pokemonId" @click="selectPokemon(pokemonId)" :isSelected="selectedPokemon.includes(pokemonId)"/>
    </div>

    <!-- Div para contener los botones -->
    <div v-if="selectedPokemon.length === 5" class="buttonsContainer">
      <button class="backButton">Back</button>
      <button class="goButton">Go</button>
    </div>
  </div>
</template>

<script setup>
import CardPokemon from '../../components/CardPokemon.vue';
import { ref } from 'vue';

// Función para generar un número aleatorio dentro de un rango
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Definir el rango de IDs de Pokémon
const minPokemonId = 1;
const maxPokemonId = 150;

// Generar 10 números aleatorios únicos dentro del rango de IDs de Pokémon
const pokemonIds = [];
while (pokemonIds.length < 10) {
  const randomId = getRandomNumber(minPokemonId, maxPokemonId);
  if (!pokemonIds.includes(randomId)) {
    pokemonIds.push(randomId);
  }
}

// Utilizar Set para eliminar duplicados y asegurarse de que haya 10 IDs únicos
const randomPokemonIds = ref(Array.from(new Set(pokemonIds)));


// Estado para controlar si se muestra el mensaje
const showMessage = ref(true);

// Temporizador para ocultar el mensaje después de 5 segundos
setTimeout(() => {
  showMessage.value = false;
}, 5000);


// Array para almacenar los IDs de los Pokémon seleccionados
const selectedPokemon = ref([]);

// Función para seleccionar un Pokémon
const selectPokemon = (pokemonId) => {
  // Si el Pokémon ya está seleccionado, lo deseleccionamos
  if (selectedPokemon.value.includes(pokemonId)) {
    selectedPokemon.value = selectedPokemon.value.filter(id => id !== pokemonId);
  } else {
    // Si no está seleccionado, lo agregamos al array
    if (selectedPokemon.value.length < 5) {
      selectedPokemon.value.push(pokemonId);
    } else {
      // Si ya hay 5 seleccionados, podrías mostrar un mensaje de error o simplemente no hacer nada
      console.log("No puedes seleccionar más de 5 Pokémon.");
    }
  }

  // Guardar el array en el localStorage
  localStorage.setItem('selectedPokemon', JSON.stringify(selectedPokemon.value));
};
</script>

<style scoped>
.mainGameView {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: 100vh;
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
}

.messageContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
}

.message {
  font-size: 5rem;
}

.cardsContainer {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.buttonsContainer {
  display: flex;
  justify-content: center;
  margin-top: 2rem; /* Espacio entre los botones y las cartas */
}

.backButton,
.goButton {
  margin: 0 1rem; /* Espacio entre los botones */
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
}
</style>
