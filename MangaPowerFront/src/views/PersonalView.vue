<template>
    <div class="general-container">
      <Logo class="logo"/>
      <h1>PERSONAL INFORMATION</h1>
      <div class="avatars">
        <div class="avatar">
          <h2>AVATAR</h2>
          <AvatarUser />
        </div>
        <div class="avatar">
          <h2>POKEMON</h2>
          <AvatarPokemon />
        </div>
      </div>


      <button class="statsBtn" @click="goToWinedCards">
        <h2>CARDS</h2>
      </button>

      <button class="statsBtn" @click="goToStatsPage">
        <h2>STATS</h2>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
          <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
        </svg>
      </button>

    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';
import AvatarUser from '../components/AvatarUser.vue';
import AvatarPokemon from '../components/AvatarPokemon.vue';
import Logo from '../components/Logo.vue';

const router = useRouter();

const goToStatsPage = () => {
  router.push({ name: 'StatsView' });
};

const goToWinedCards = () => {
  router.push({ name: 'WinedCardsView' });
};


  </script>
    
  <style scoped>

  button {
    margin: 0.5rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background-color: red;
  }
  .general-container {
    color: white;
    padding-top: 13rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg'); 
    background-size: cover; 
    background-repeat: no-repeat; 
  }

  svg {
    margin: 0.5rem;
    height: 2rem;
  }
  
  .statsBtn {
    display: flex;
    margin: 0.5rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background-color: red;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .avatars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  </style>