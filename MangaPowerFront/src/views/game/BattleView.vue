<template>
  <div class="mainGameView">
    <div v-if="showMessage" class="messageContainer">
      <div class="message">¡Start Battle!</div>
    </div>

    <div v-if="showMessage2" class="messageContainer">
      <div class="message">Select your card</div>
    </div>

    <div class="cardsContainer YourCards">
      <!-- Iterar sobre los IDs de los Pokémon seleccionados por el jugador -->
      <CardPokemon v-for="pokemonId in selectedPokemon" :key="pokemonId" :selectedPokemonId="pokemonId" @click="selectPokemon(pokemonId)"/>
    </div>

    <div class="cardsContainer BattleArea">
      <!-- Iterar sobre el array de IDs de Pokémon seleccionados para la batalla -->
      <CardPokemon v-for="pokemonId in battlePokemon" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>

    <div class="cardsContainer PCCards">
      <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
      <CardPokemon v-for="pokemonId in pokemonIdsPC" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>

    <button v-if="isGoVisible" class="goButton" @click="goBattle">Go!</button>

  </div>
</template>

<script setup>
  // Importa las dependencias necesarias
  import CardPokemon from '../../components/CardPokemon.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  // Obtén acceso al router
  const router = useRouter();

  // Función para generar un número aleatorio dentro de un rango
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Definir el rango de IDs de Pokémon
  const minPokemonId = 1;
  const maxPokemonId = 150;

  // Array para almacenar los IDs de los Pokémon de la PC
  const PCPokemons = ref([]);

  // Generar 5 números aleatorios únicos dentro del rango de IDs de Pokémon para la PC
  const pokemonIdsPC = [];
  while (pokemonIdsPC.length < 5) {
    const randomId = getRandomNumber(minPokemonId, maxPokemonId);
    if (!pokemonIdsPC.includes(randomId)) {
      pokemonIdsPC.push(randomId);
    }
  }

  // Guardar los IDs generados en el localStorage para la PC
  localStorage.setItem('PCPokemons', JSON.stringify(pokemonIdsPC));




  // Estado para controlar si se muestra el mensaje
  const showMessage = ref(true);

  // Temporizador para ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    showMessage.value = false;
  }, 3000);

  // Estado para controlar si se muestra el mensaje
  const showMessage2 = ref(false);

  // Temporizador para ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    showMessage2.value = true;
  }, 3000);

  // Temporizador para mostrar el mensaje nuevamente después de 10 segundos
  setTimeout(() => {
    showMessage2.value = false;
  }, 6000);




  // Array para almacenar los IDs de los Pokémon seleccionados por el jugador
  const selectedPokemon = ref([]);

  // Obtener los IDs de los Pokémon seleccionados por el jugador desde el localStorage
  const storedSelectedPokemon = localStorage.getItem('selectedPokemon');
  if (storedSelectedPokemon) {
    selectedPokemon.value = JSON.parse(storedSelectedPokemon);
  }

  // Array para almacenar los IDs de los Pokémon seleccionados para la batalla
  const battlePokemon = ref([]);

  // Función para seleccionar un Pokémon
  const selectPokemon = (pokemonId) => {
    // Si el Pokémon ya está seleccionado, lo deseleccionamos
    if (battlePokemon.value.includes(pokemonId)) {
      battlePokemon.value = battlePokemon.value.filter(id => id !== pokemonId);
    } else {
      // Si no está seleccionado, lo agregamos al array
      if (battlePokemon.value.length < 1) {
        battlePokemon.value.push(pokemonId);
      } else {
        // Si ya hay 1 seleccionado, podrías mostrar un mensaje de error o simplemente no hacer nada
        console.log("No puedes seleccionar más de 1 Pokémon.");
      }
    }

    // Guardar el array en el localStorage
    localStorage.setItem('SelectedBattlePokemon', JSON.stringify(battlePokemon.value));
  };

    // Función para verificar si un Pokémon está seleccionado
    const isSelected = (pokemonId) => {
    return selectedPokemon.value.includes(pokemonId);
  };


  const goBattle = () => {
  // Si no hay ninguna carta seleccionada de YourCards, salimos de la función
  if (selectedPokemon.value.length === 0) {
    return;
  }

  // Obtener un Pokémon aleatorio de la PC
  const randomIndex = Math.floor(Math.random() * pokemonIdsPC.length);
  const randomPokemonId = pokemonIdsPC[randomIndex];

  // Agregar el Pokémon aleatorio de la PC al array battlePokemon
  battlePokemon.value.push(randomPokemonId);

  // Tu lógica para iniciar la batalla aquí
};
</script>

<style scoped>
.mainGameView {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
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

.PCCards {
  background-color: rgba(255, 195, 126, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
}

.BattleArea {
  background-color: rgba(233, 126, 255, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
}

.YourCards {
  background-color: rgba(126, 203, 255, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
}

.selected {
  border: 2px solid orange;
}

</style>
