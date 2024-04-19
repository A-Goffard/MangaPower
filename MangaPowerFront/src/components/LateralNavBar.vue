<template>
    <div>
        <div id="nav-icon" @click="toggleMenu">
            <!-- Icono de hamburguesa con imagen -->
            <img class="rueda" :class="{ 'rotated': menuOpen }" src="/Logos/pokeball.png" alt="Menu" />
        </div>
  
      <!-- Menú de navegación -->
      <nav id="menu" :style="{ left: menuOpen ? '0' : '-10rem' }">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="{ name: link.name }">{{ link.text }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const menuOpen = ref(false);
  const links = ref([
    { text: 'Home', name: 'home' },
    { text: 'Login', name: 'LoginView' },
    { text: 'Register', name: 'RegisterView' },
    { text: 'Personal', name: 'Personal' },
    { text: 'Stats', name: 'StatsView' },
    { text: 'Game', name: 'GameView' },
    { text: 'Pokedex', name: 'Pokedex' },
    { text: 'CardStore', name: 'CardStore' },
    { text: 'About', name: 'About' }
  ]);
  
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  </script>
  
  <style scoped>

  .rueda {
    width: 8rem;
    transition: transform 0.3s ease;
  }
  .rotated {
    transform: rotate(-180deg);
  }
  #nav-icon {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 9999;
    cursor: pointer;
  }
  
  /* Estilos para el menú de navegación */
  #menu {
    position: fixed;
    top: 0;
    left: -10rem;
    width: 10rem;
    height: 100%;
    transition: left 0.3s ease;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9998;
  }
  
  #menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 9rem;
    margin-left: 1.5rem;
  }
  
  #menu ul li {
    padding: 1rem;
  }
  
  #menu ul li a {
    text-decoration: none;
    color: #dadada;
    transition: color 0.3s ease;
  }
  
  #menu ul li a:hover {
    color: #ababab;
  }

  </style>
  