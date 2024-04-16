<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <h1>Navegador</h1>
      <div class="branding">
        <img src="logo.png" class="logo" alt="">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li v-for="link in navLinks" :key="link.name">
          <RouterLink class="NavButton link" :to="link.to" @click="closeMobileNav">{{ link.label }}</RouterLink>
        </li>
      </ul>
      <div class="icon">
        <button @click="toggleMobileNav" v-show="mobile">
          <img :class="{ 'icon-active': mobileNav }" src="public/Vector.png" class="hojitas" alt="">
        </button>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li v-for="link in navLinks" :key="link.name">
            <RouterLink class="NavButton link" :to="link.to" @click="closeMobileNav">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

// Importa las props directamente
const navLinks = props.navLinks;

const mobileNav = ref(false);
const mobile = ref(true);
const scrolledNav = ref(false);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
  const hojitasIcon = document.querySelector('.hojitas');
  if (hojitasIcon) {
    hojitasIcon.style.transform = mobileNav.value ? 'rotate(45deg)' : 'rotate(0deg)';
  }
};

const closeMobileNav = () => {
  mobileNav.value = false;
};

const updateScroll = () => {
  scrolledNav.value = window.scrollY > 50;
};

const checkScreen = () => {
  mobile.value = window.innerWidth <= 990;
  if (mobile.value) {
    mobileNav.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen);
  window.removeEventListener('scroll', updateScroll);
});

checkScreen();
</script>


<style scoped>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  
  .main-nav-div {
    display: flex;
    
  }
  
  nav {
    padding: 30px;
    background: #D76868;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  
  h1 {
    margin: 1rem;
  }
  
  /* Hamburger menu ------------------------- */
  
  .hamburger-menu {
    
    position: relative;
    width: 100%;
    height: 5rem;
  }
  
  .hamburger-icon {
    width: 250px;
    height: 50px;
    cursor: pointer;
  
  }
  
  .hamburger-icon div {
  
    width: 100%;
    height: 20px;
    background-color: black;
    margin: 5px 0;
    transition: all 0.3s ease;
    border-radius: 10px;
  }
  
  .menu-items {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 90%;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background: white;
    opacity: 65%;
    border-radius: 10px;
    font-size: xx-large;
  }
  
  .menu-items.open {
    display: block;
  }
  
  .menu-items ul {
    list-style: none;
    padding: 0;
  }
  
  .menu-items ul li {
    padding: 8px 0;
    cursor: pointer;
  }
  </style>
  