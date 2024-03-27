<template>
  
  <div class="mainDivHome">
    <!-- <img src="/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg" alt=""> -->
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
  <div>hola hola</div>
</div>


</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { label: 'Menu Item 1', color: '#B93E3E' },
        { label: 'Menu Item 2', color: '#B93E3E' },
        { label: 'Menu Item 3', color: '#B93E3E' }
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

<style>


.mainDivHome {
  height: 100vh;
  
  background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg');
}

.hamburger-menu {

  position: relative;
  width: 100%;
}

.hamburger-icon {
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger-icon div {
  width: 100%;
  height: 4px;
  background-color: #333;
  margin: 5px 0;
  transition: all 0.3s ease;
}

.menu-items {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
