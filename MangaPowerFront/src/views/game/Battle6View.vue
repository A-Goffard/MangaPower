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
  
  // Función para obtener el usuario actual del localStorage
  const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  // Función para guardar el usuario actualizado en el localStorage
  const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  // Función para actualizar los datos del usuario en la base de datos
  const updateUserInDatabase = (updatedUser) => {
    const users = JSON.parse(localStorage.getItem('db')).usuarios;
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('db', JSON.stringify({ usuarios: users }));
    }
  };
  
  // Estado para indicar si el juego ha terminado
  const gameOver = ref(false);
  
  // Lógica para marcar el juego como terminado y actualizar los datos del usuario
  onMounted(() => {
    gameOver.value = true;
    const message = getMessage();
    const user = getUser();
    if (user) {
      if (message === 'You win!') {
        user.plays++;
        user.win++;
        const randomCardId = generateRandomCardId(user.winedCards);
        user.winedCards.push(randomCardId);
      } else if (message === 'You lose!') {
        user.plays++;
        user.lose++;
      } else if (message === '¡Its a tie!') {
        user.plays++;
      }
      user.winedCardsNumber = user.winedCards.length;
      saveUser(user);
      updateUserInDatabase(user);
    }
  });
  
  // Función para generar un ID aleatorio entre 1 y 151 que no esté en el array de cartas ganadas
  const generateRandomCardId = (winedCards) => {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 151) + 1;
    } while (winedCards.includes(randomId.toString()));
    return randomId.toString();
  };
  
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
  