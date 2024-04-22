<template>
  <div class="mainGameView">
    <div v-if="showMessage" class="messageContainer">
      <div class="message">¡Start Battle!</div>
    </div>

    <div v-if="showMessage2" class="messageContainer">
      <div class="message">Select your card</div>
    </div>

    <div class="cardsContainer YourCards">
      <!-- Iterar sobre los IDs de los Pokémon seleccionados por el jugador que no están en la batalla -->
      <CardPokemon v-for="pokemonId in filteredSelectedPokemon" :key="pokemonId" :selectedPokemonId="pokemonId" @click="selectPokemon(pokemonId)"/>
    </div>

    <div class="cardsContainer BattleArea">
      <!-- Iterar sobre el array de IDs de Pokémon seleccionados para la batalla -->
      <CardPokemon v-for="pokemonId in battlePokemon" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>

    <div class="cardsContainer PCCards">
      <!-- Iterar sobre los IDs de los Pokémon de la PC que no están en la batalla -->
      <CardPokemon v-for="pokemonId in filteredPokemonIdsPC" :key="pokemonId" :selectedPokemonId="pokemonId"/>
    </div>

    <button v-if="showGoButton" class="goButton" @click="goBattle">Go!</button>

  </div>
</template>

<script setup>
// Importa las dependencias necesarias
import CardPokemon from '../../components/CardPokemon.vue';
import { ref, computed } from 'vue';
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
const pokemonIdsPC = ref([]);

// Generar 5 números aleatorios únicos dentro del rango de IDs de Pokémon para la PC
while (pokemonIdsPC.value.length < 5) {
  const randomId = getRandomNumber(minPokemonId, maxPokemonId);
  if (!pokemonIdsPC.value.includes(randomId)) {
    pokemonIdsPC.value.push(randomId);
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

  // Mostrar el botón "Go!" cuando se selecciona un Pokémon de YourCards
  showGoButton.value = selectedPokemon.value.length > 0;

};

// Función para verificar si un Pokémon está seleccionado
const isSelected = (pokemonId) => {
  return selectedPokemon.value.includes(pokemonId);
};

// Estado para controlar si se muestra el botón "Go!"
const showGoButton = ref(false);


// Definir el array para almacenar los IDs de los Pokémon seleccionados por la PC para la batalla
const selectedPCBattlePokemon = ref([]);


// Función para seleccionar un Pokémon de la PC
const selectPCPokemon = (pokemonId) => {
  selectedPCBattlePokemon.value.push(pokemonId);
  localStorage.setItem('SelectedPCBattlePokemon', JSON.stringify(selectedPCBattlePokemon.value));
};

// Función para comparar los valores de HP, ataque y defensa de dos Pokémon
const comparePokemonStats = async () => {
  // Obtener los IDs de los Pokémon en la zona de batalla
  const pokemonIdsInBattle = battlePokemon.value;

  // Verificar que haya al menos dos Pokémon en la batalla para comparar
  if (pokemonIdsInBattle.length < 2) {
    console.log("Debe haber al menos dos Pokémon en la batalla para comparar.");
    return;
  }

  try {
    // Obtener los detalles de los Pokémon de la API y almacenarlos en un array
    const pokemonDetailsPromises = pokemonIdsInBattle.map(async (pokemonId) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const pokemonData = await response.json();
      return pokemonData;
    });

    // Esperar a que todas las solicitudes a la API se completen
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    // Imprimir los detalles de los Pokémon en la consola para comparar
    console.log("Detalles del Pokémon en la zona de batalla:");
    pokemonDetails.forEach((pokemon) => {
      console.log(pokemon);
    });

    // Calcular la suma total de los valores de HP, ataque y defensa de cada Pokémon
    const totalStats = pokemonDetails.map((pokemon) => {
      return pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
    });

    // Determinar el índice del Pokémon con la suma total más alta
    const winningIndex = totalStats.indexOf(Math.max(...totalStats));

    // Determinar el ganador y realizar las acciones correspondientes
    if (winningIndex !== -1) {
      const winningPokemonId = pokemonIdsInBattle[winningIndex];
      if (selectedPokemon.value.includes(winningPokemonId)) {
        // El jugador ganó
        console.log("¡Ganaste!");
        const playerPoints = localStorage.getItem('PlayerPoints') ? JSON.parse(localStorage.getItem('PlayerPoints')) : [];
        playerPoints.push(2);
        localStorage.setItem('PlayerPoints', JSON.stringify(playerPoints));
      } else {
        // La PC ganó
        console.log("¡La PC ganó!");
        const pcPoints = localStorage.getItem('PCPoints') ? JSON.parse(localStorage.getItem('PCPoints')) : [];
        pcPoints.push(2);
        localStorage.setItem('PCPoints', JSON.stringify(pcPoints));
      }
    } else {
      console.log("Hubo un empate.");
    }
  } catch (error) {
    console.error("Error al comparar los Pokémon:", error);
  }
};

// Función para iniciar la batalla
const goBattle = () => {
  // Obtener un Pokémon aleatorio de la PC
  const randomIndex = Math.floor(Math.random() * pokemonIdsPC.value.length);
  const randomPokemonId = pokemonIdsPC.value[randomIndex];

  // Agregar el Pokémon aleatorio de la PC al array battlePokemon
  battlePokemon.value.push(randomPokemonId);

  // Obtener el array de Pokémon de la PC almacenado en el localStorage
  const storedPCPokemons = JSON.parse(localStorage.getItem('PCPokemons'));

  // Verificar si storedPCPokemons es un array antes de filtrar
  if (Array.isArray(storedPCPokemons)) {
    // Encontrar y eliminar el Pokémon generado aleatoriamente del array
    const updatedPCPokemons = storedPCPokemons.filter(id => id !== randomPokemonId);

    // Actualizar el localStorage con el nuevo array sin el Pokémon eliminado
    localStorage.setItem('PCPokemons', JSON.stringify(updatedPCPokemons));

    // Actualizar el array pokemonIdsPC con el nuevo valor
    pokemonIdsPC.value.splice(randomIndex, 1);

    // Agregar el ID del Pokémon aleatorio de la PC al array selectedPCBattlePokemon
    selectedPCBattlePokemon.value.push(randomPokemonId);

    // Guardar el array en el localStorage
    localStorage.setItem('SelectedPCBattlePokemon', JSON.stringify(selectedPCBattlePokemon.value));
  } else {
    console.error('El valor almacenado en PCPokemons no es un array.');
    // Manejar el caso en que el valor almacenado no sea un array
  }

  // Ocultar el botón "Go!" después de agregar la carta del PC
  showGoButton.value = false;

  setTimeout(comparePokemonStats, 2000);
};

// Array para almacenar los IDs de los Pokémon seleccionados por el jugador que no están en la batalla
const filteredSelectedPokemon = computed(() => {
  return selectedPokemon.value.filter(id => !battlePokemon.value.includes(id));
});

// Array para almacenar los IDs de los Pokémon de la PC que no están en la batalla
const filteredPokemonIdsPC = computed(() => {
  return pokemonIdsPC.value.filter(id => !battlePokemon.value.includes(id));
});


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
  top: 25%;
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


.goButton {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Asegura que los botones estén encima de otros elementos */
  margin: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  background-color: red;
  font-size: 3rem;
}
</style>
