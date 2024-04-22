<template>
  <div class="mainGameView">
    <div v-if="showMessage" class="messageContainer">
      <div class="message">¡Select five cards!</div>
    </div>

    <div class="cardsContainer">
      <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
      <CardPokemon v-for="pokemonId in pokemonIds" :key="pokemonId" :selectedPokemonId="pokemonId" @click="selectPokemon(pokemonId)" :isSelected="selectedPokemon.includes(pokemonId)"/>
    </div>

    <!-- Div para contener los botones, solo se muestra cuando se han seleccionado los 5 pokémon -->
    <div v-if="selectedPokemon.length === 5" class="buttonsContainer">
      <div class="buttonsWrapper">
        <button class="backButton" @click="unselect">Back</button>
        <button class="goButton" @click="goToGame">Go</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardPokemon from '../../components/CardPokemon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importa el router de Vue Router

const router = useRouter(); // Obtén acceso al router

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

const unselect = () => {
  selectedPokemon.value = [];
  localStorage.setItem('selectedPokemon', JSON.stringify(selectedPokemon.value));
  router.push({ name: 'GameView' });

};

const goToGame = () => {
  router.push({ name: 'BattleView' });
};
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
  background-image: url('/public/GameView/Pokemon_Stadium_2_SSBU\ \(1\).webp');
  background-attachment: fixed;
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Asegura que los botones estén encima de otros elementos */
}

.buttonsWrapper {
  display: flex;
  justify-content: center;
}

.backButton,
.goButton {
  margin: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  background-color: red;
  font-size: 3rem;
}

</style>