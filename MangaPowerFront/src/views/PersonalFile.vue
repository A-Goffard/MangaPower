<template>
  <div class="container">
    
    <Logo class="logo"/>
    <h1>PERSONAL FILE</h1>
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


    <h2>CARDS</h2>
    <div class="carousel-container" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
      <div class="carousel" ref="carousel">
        <div v-for="(pokemon, index) in pokemons" :key="index" class="pokemon-card" @click="goToDetail(pokemon.id)">
          <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image">
          <div><strong>Name:</strong> {{ pokemon.name }}</div>
          <div><strong>Abilities:</strong> {{ pokemon.abilities }}</div>
        </div>
      </div>
      <button class="prev-button" @click="slideLeft">Previous</button>
      <button class="next-button" @click="slideRight">Next</button>
    </div>


    <button class="statsBtn" @click="goToStatsPage">
      <h2>STATS</h2>
      <!-- Aquí agregamos el gráfico SVG -->
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AvatarUser from '../components/AvatarUser.vue';
import AvatarPokemon from '../components/AvatarPokemon.vue';
import Logo from '../components/Logo.vue'

const router = useRouter();

const carousel = ref(null);
const position = ref(0);
const cardWidth = 200; // Ancho de cada tarjeta de Pokémon
const pokemons = ref([]);
let autoSlideInterval; // Variable para almacenar el intervalo del carrusel automático

const slideLeft = () => {
  position.value += cardWidth;
  if (position.value > 0) {
    position.value = -(pokemons.value.length - 1) * cardWidth;
  }
  carousel.value.style.transform = `translateX(${position.value}px)`;
};

const slideRight = () => {
  if (carousel.value) {
    position.value -= cardWidth;
    if (position.value < -(pokemons.value.length * cardWidth)) {
      position.value = 0;
    }
    carousel.value.style.transform = `translateX(${position.value}px)`;
  }
};

const fetchPokemonData = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
};

const getPokemonData = async (pokemonId) => {
  const data = await fetchPokemonData(pokemonId);
  if (data) {
    const pokemon = {
      id: data.id,
      name: data.name.toUpperCase(),
      image:data.sprites.other['official-artwork'].front_default,     
      abilities: data.abilities.map(ability => ability.ability.name).join(', ')
    };
    pokemons.value.push(pokemon);
  }
};

const initCarousel = async () => {
  const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  await Promise.all(pokemonIds.map(async id => await getPokemonData(id)));
};

onMounted(initCarousel);

const goToDetail = (pokemonId) => {
  router.push({ name: 'DetailCard', params: { id: pokemonId } });
};

const goToStatsPage = () => {
  router.push({ name: 'StatsView' });
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    slideRight();
  }, 2000); // Cambia el valor 3000 por el intervalo de tiempo deseado en milisegundos (en este caso, 2 segundos)
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Iniciar el carrusel automáticamente al montar el componente
onMounted(startAutoSlide);

</script>


<style scoped>
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
h1 {
  text-align: center;
}

.container {
  color: white;
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

.carousel-container {
  width: 100%; /* Cambiar el valor de 60% a 100% */
  max-width: 100%; /* Asegurar que el ancho no exceda el ancho del contenedor padre */
  margin: 1rem auto;
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.pokemon-card {
  text-align: center;
  width: 20rem;
}

.pokemon-image {
  width: 15rem;
  height: 15rem;

}

.prev-button,
.next-button {
  background-color: rgba(226, 16, 16, 0.5);
  border-radius: 2rem;
  cursor: pointer;
  width: 10rem;
  height: 4rem;
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
</style>
