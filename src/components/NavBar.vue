<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { label: 'Menu Item 1', color: '#000000', route: '/' },
        { label: 'login', route: '/loging', color: '#000000' },
        { label: 'Register', route: '/register', color: '#000000' },
        { label: 'Personal Profile', route: '/personal', color: '#000000' },
        { label: 'Stats', route: '/stats', color: '#000000' },
        { label: 'Gallery', route: '/gallery', color: '#000000' },
        { label: 'Game', route: '/game', color: '#000000' },
        { label: 'About', route: '/about', color: '#000000' },
        { label: 'CardStore', route: '/cardstore', color: '#000000' },
        { label: 'PersonalFile', route: '/personalfile', color: '#000000' },
        { label: 'DetailCard', route: '/detailcard', color: '#000000' }
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
        <div class="menu-icon" @click="toggleMenu">
          <img src="/public/Logos/pxfuel__6_-removebg-preview.png" alt="Menu Icon">
        </div>

        <!-- Menu Items -->
        <div class="menu-items" :class="{ 'open': isMenuOpen }">
          <ul>
            <li v-for="(item, index) in menuItems" :key="index" :style="{ color: item.color }">
              <router-link :to="item.route">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Old routes --------------------------------------->
      <router-link to="/">Home</router-link> |
      <router-link to="/loging">Loging</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/personal">Personal Profile</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/game">Game</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/personalfile">PersonalFile</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/detailcard">DetailCard</router-link> |
      <router-link to="/cardstore">CardStore</router-link>

    </div>
    <div class="hamburger-icon2"></div>
  </nav>
</template>

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

/* .menu-icon {
  background-image: url("/public/Logos/pxfuel__6_-removebg-preview.png");

} */

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