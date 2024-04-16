<script>
import { RouterLink, RouterView } from 'vue-router'

/* Hamburger menu ----------------------------------------*/

export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { label: 'Menu Item 1', color: '#000000' },
        { label: 'login', color: '#000000' },
        { label: 'Register', color: '#000000' },
        { label: 'Personal Profile', color: '#000000' },
        { label: 'Stats', color: '#000000' },
        { label: 'Gallery', color: '#000000' },
        { label: 'Game', color: '#000000' },
        { label: 'About', color: '#000000' },
        { label: 'CardStore', color: '#000000' }
        // Add more menu items as needed
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};

</script>

<template>

  <nav>
    <div class="main-nav-div">
      <!-- Hamburger menu ------------------------------------------------ -->
      <div class="hamburger-menu">
        <!-- Hamburger Icon -->
        <div class="hamburger-icon" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <!-- Menu Items -->
        <div class="menu-items" :class="{ 'open': isMenuOpen }">
          <!-- Your menu items go here -->
          <ul>
            <li v-for="(item, index) in menuItems" :key="index" :style="{ color: item.color }">{{ item.label }}</li>
          </ul>
        </div>
      </div>

      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/game">Game</router-link> |
      <router-link to="/about">About</router-link> |
      <Router-Link to="/personalfile">PersonalFile</Router-Link> |
      <Router-Link to="/gallery">Gallery</Router-Link> |
      <Router-Link to="/detailcard/:id">DetailCard</Router-Link> |
      <Router-Link to="/cardstore">CardStore</Router-Link> |

    </div>
  </nav>

<!--   <router-view /> -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

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
