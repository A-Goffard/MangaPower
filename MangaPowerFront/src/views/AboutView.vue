<template>
  <div class="mainDivHome">
    <Logo class="logo"/>
    <div class="about-page">
      <h1>Welcome to Pokémon Cards Adventure</h1>
      <div class="section">
        <h2>Discover the exciting world of Pokémon cards.</h2>
        <p>In Pokémon Cards Adventure, you will immerse yourself in a universe full of excitement, strategy and fun. Become a Pokémon trainer, collect cards, build your deck and challenge other trainers to prove who is the best.</p>
      </div>
      <div class="section">
        <h2>Explore the origins of Pokémon cards</h2>
        <p>Learn about the rich history of Pokémon cards, from their humble beginnings in 1996 to their evolution today. Discover how Pokémon cards have become an iconic part of pop culture, capturing the imagination of millions of people around the world.</p>
      </div>
      <div class="section">
        <h2>Meet the iconic characters</h2>
        <p>From Pikachu to Charizard, meet your favorite Pokémon and discover their unique powers. Learn about legendary trainers, like Ash Ketchum and Misty, who have left an indelible mark on Pokémon history.</p>
      </div>
      <div class="section">
        <h2>Join the community</h2>
        <p>Connect with other Pokémon trainers from around the world! Participate in tournaments, trade cards, and share strategies in our vibrant online community. Make new friends and enjoy the camaraderie that only Pokémon fans can offer.</p>
      </div>
      <div class="section">
        <h2>Embark on an unforgettable adventure</h2>
        <p>From the serene landscapes of Pallet Town to the exciting battles in the Pokémon League, Pokémon Cards Adventure will take you on an epic journey you'll never forget. Are you ready to start your journey to greatness?</p>
      </div>
    </div>
  
  </div>
</template>

<script setup>
import Logo from '../components/Logo.vue'
</script>

<style>

.mainDivHome {
  padding-top: 13rem;
  height: auto; /* Ajustar la altura automáticamente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-attachment: fixed; /* Fija el fondo */
}

.about-page {
  padding: 20px;
  color: white;
  width: 80%;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.section p {
  font-size: 18px;
}

</style>