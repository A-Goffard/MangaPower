<template>
    <div class="mainGameView">
      <h2 class="messageContainer message">Finish!!</h2>
      <!-- Aquí irían los componentes de puntuación y otros elementos del juego -->
      <div v-if="gameOver">
        <h2 class="messageContainer message">{{ getMessage() }}</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Función para obtener el resultado de la batalla del localStorage
  const getBattleResult = () => {
    const result = localStorage.getItem('BattleResult');
    return result ? result.split(',') : [];
  };
  
  // Estado para indicar si el juego ha terminado
  const gameOver = ref(false);
  
  // Función para determinar el mensaje según el resultado de la batalla
  const getMessage = () => {
    const battleResult = getBattleResult();
    if (battleResult.includes('win')) {
      return 'You win!';
    } else if (battleResult.includes('lose')) {
      return 'You lose!';
    } else if (battleResult.includes('tie')) {
      return '¡Its a tie!';
    } else {
      return '¡La batalla ha terminado!';
    }
  };
  
  // Lógica para marcar el juego como terminado
  onMounted(() => {
    gameOver.value = true;
  });
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
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;
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
  </style>
  