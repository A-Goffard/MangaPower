<template>
  <div class="mainGameView">
    <div v-if="showMessage" class="messageContainer">
      <div class="message">¡Start Battle!</div>
    </div>

    <div class="cardsContainer PCCards">
      <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
      <CardPokemon v-for="pokemonId in pokemonIdsPC" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>

    <div class="cardsContainer BattleArea">
      <!-- Iterar sobre el array de IDs de Pokémon y renderizar múltiples instancias de CardPokemon -->
      <CardPokemon v-for="pokemonId in pokemonIds" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>

    <div class="cardsContainer YourCards">
      <!-- Iterar sobre los IDs de los Pokémon seleccionados por el jugador -->
      <CardPokemon v-for="pokemonId in selectedPokemon" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>
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
  }, 5000);

  // Array para almacenar los IDs de los Pokémon seleccionados por el jugador
  const selectedPokemon = ref([]);

  // Obtener los IDs de los Pokémon seleccionados por el jugador desde el localStorage
  const storedSelectedPokemon = localStorage.getItem('selectedPokemon');
  if (storedSelectedPokemon) {
    selectedPokemon.value = JSON.parse(storedSelectedPokemon);
  }

  // Función para seleccionar un Pokémon para la PC
  const selectPCPokemon = (pokemonId) => {
    // Si el Pokémon ya está seleccionado, no hacemos nada
    if (PCPokemons.value.includes(pokemonId)) {
      return;
    } else {
      // Si no está seleccionado, lo agregamos al array
      if (PCPokemons.value.length < 5) {
        PCPokemons.value.push(pokemonId);
      } else {
        // Si ya hay 5 seleccionados, mostramos un mensaje de error
        console.log("There are 5 pokemon for the PC");
      }
    }

    // Guardar el array en el localStorage
    localStorage.setItem('PCPokemons', JSON.stringify(PCPokemons.value));
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

</style>
