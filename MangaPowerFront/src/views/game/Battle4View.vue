<template>
    <div class="mainGameView">
      <div v-if="showMessage" class="messageContainer">
        <div class="message">¡Comienza la Batalla!</div>
      </div>
  
      <div v-if="showMessage2" class="messageContainer">
        <div class="message">Selecciona tu carta</div>
      </div>
  
      <div class="cardsContainer YourCards">
        <PlayerPoints :points="playerPoints" />
        <!-- Iterar sobre los IDs de los Pokémon seleccionados por el jugador que no están en la batalla -->
        <CardPokemon v-for="pokemonId in filteredSelectedPokemon" :key="pokemonId" :selectedPokemonId="pokemonId" @click="selectPokemon(pokemonId)"/>
      </div>
  
      <div class="cardsContainer BattleArea">
        <!-- Iterar sobre el array de IDs de Pokémon seleccionados para la batalla -->
        <CardPokemon v-for="pokemonId in battlePokemon" :key="pokemonId" :selectedPokemonId="pokemonId"/>
      </div>
  
      <div class="cardsContainer PCCards">
        <PCPoints :points="pcPoints" />
        <!-- Iterar sobre los IDs de los Pokémon de la PC que no están en la batalla -->
        <CardPokemon v-for="pokemonId in filteredPokemonIdsPC" :key="pokemonId" :selectedPokemonId="pokemonId"/>
      </div>
  
      <button v-if="showGoButton" class="goButton" @click="goBattle">¡Adelante!</button>
  
    </div>
  </template>
  
  <script setup>
  // Importar las dependencias necesarias
  import CardPokemon from '../../components/CardPokemon.vue';
  import PlayerPoints from '@/components/game/PlayerPoints.vue';
  import PCPoints from '@/components/game/PCPoints.vue';
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Define variables reactivas para almacenar los puntos del jugador y de la PC
  const playerPoints = ref(0);
  const pcPoints = ref(0);
  
  // Función para actualizar los puntos del jugador
  const updatePlayerPoints = (points) => {
    playerPoints.value = points;
  };
  
  // Función para actualizar los puntos de la PC
  const updatePCPoints = (points) => {
    pcPoints.value = points;
  };
  
  // Obtener acceso al enrutador
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
  
  // Generar 2 números aleatorios únicos dentro del rango de IDs de Pokémon para la PC
  while (pokemonIdsPC.value.length < 2) {
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
  const selectedPokemon4 = ref([]);
  
  // Obtener los IDs de los Pokémon seleccionados por el jugador desde el localStorage
  const storedSelectedPokemon = localStorage.getItem('selectedPokemon4');
  if (storedSelectedPokemon) {
    selectedPokemon4.value = JSON.parse(storedSelectedPokemon);
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
  
    // Mostrar el botón "¡Adelante!" cuando se selecciona un Pokémon de YourCards
    showGoButton.value = selectedPokemon4.value.length > 0;
  
  };
  
  // Función para verificar si un Pokémon está seleccionado
  const isSelected = (pokemonId) => {
    return selectedPokemon4.value.includes(pokemonId);
  };
  
  // Estado para controlar si se muestra el botón "¡Adelante!"
  const showGoButton = ref(false);
  
  
  // Definir el array para almacenar los IDs de los Pokémon seleccionados por la PC para la batalla
  const selectedPCBattlePokemon = ref([]);
  
  
  // Función para seleccionar un Pokémon de la PC
  const selectPCPokemon = (pokemonId) => {
    selectedPCBattlePokemon.value.push(pokemonId);
    localStorage.setItem('SelectedPCBattlePokemon', JSON.stringify(selectedPCBattlePokemon.value));
  };

    // Función para actualizar y guardar los IDs de los Pokémon seleccionados en YourCards
    const updateAndSaveSelectedPokemon = () => {
  const updatedSelectedPokemon = selectedPokemon4.value.filter(id => !battlePokemon.value.includes(id));
  localStorage.setItem('selectedPokemon5', JSON.stringify(updatedSelectedPokemon));
};
  
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
        if (selectedPokemon4.value.includes(winningPokemonId)) {
          // El jugador ganó
          console.log("¡Ganaste!");
          playerPoints.value += 2;
        } else {
          // La PC ganó
          console.log("¡La PC ganó!");
          pcPoints.value += 2;
        }
      } else {
        console.log("Hubo un empate.");
      }
  
      // Actualizar los puntos en localStorage
      localStorage.setItem('PlayerPoints', playerPoints.value.toString());
      localStorage.setItem('PCPoints', pcPoints.value.toString());
  
      // Actualizar y guardar los IDs de los Pokémon seleccionados en YourCards
      updateAndSaveSelectedPokemon();
    } catch (error) {
      console.error("Error al comparar los Pokémon:", error);
    }
  
    // Limpiar los arrays y realizar otras operaciones si es necesario
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
  
    // Ocultar el botón "¡Adelante!" después de agregar la carta del PC
    showGoButton.value = false;
  
    setTimeout(comparePokemonStats, 2000);
  
    // Redirigir a la vista Battle2View después de la comparación
    router.push({ name: 'Battle5View' });
  };
  
  // Array para almacenar los IDs de los Pokémon seleccionados por el jugador que no están en la batalla
  const filteredSelectedPokemon = computed(() => {
    return selectedPokemon4.value.filter(id => !battlePokemon.value.includes(id));
  });
  
  // Array para almacenar los IDs de los Pokémon de la PC que no están en la batalla
  const filteredPokemonIdsPC = computed(() => {
    return pokemonIdsPC.value.filter(id => !battlePokemon.value.includes(id));
  });
  
  // Antes de iniciar la batalla, cargar los puntos del jugador y de la PC desde el localStorage:
  const storedPlayerPoints = localStorage.getItem('PlayerPoints');
  if (storedPlayerPoints) {
    playerPoints.value = JSON.parse(storedPlayerPoints);
  }
  
  const storedPCPoints = localStorage.getItem('PCPoints');
  if (storedPCPoints) {
    pcPoints.value = JSON.parse(storedPCPoints);
  }
  
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

    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .BattleArea {

    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .YourCards {

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
  