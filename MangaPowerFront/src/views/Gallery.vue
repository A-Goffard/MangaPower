<template>
	<div class="carousel-container" @mouseover="stopAutoSlide" @mouseleave="startAutoSlide">
	  <div class="carousel" ref="carousel">
		<div v-for="(pokemon, index) in pokemons" :key="index" class="pokemon-card">
		  <h2>POKEMON CARDS</h2>
		  <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image">
		  <div><strong>Name:</strong> {{ pokemon.name }}</div>
		  <div><strong>Abilities:</strong> {{ pokemon.abilities }}</div>
		</div>
	  </div>
	  <button class="prev-button" @click="slideLeft">Previous</button>
	  <button class="next-button" @click="slideRight">Next</button>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const carousel = ref(null);
  const position = ref(0);
  const cardWidth = 200; // Ancho de cada tarjeta de Pokémon
  const pokemons = ref([]);
  let autoSlideInterval = null;
  
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
  
  const getAllPokemons = async () => {
	const allPokemons = [];
	const totalPokemons = 151; // Este es el número total de Pokémon en la PokéAPI al momento de escribir esto
  
	for (let i = 1; i <= totalPokemons; i++) {
	  const pokemonData = await fetchPokemonData(i);
	  if (pokemonData) {
		const pokemon = {
		  name: pokemonData.name.toUpperCase(),
		  image: pokemonData.sprites.other['official-artwork'].front_default,
		  abilities: pokemonData.abilities.map(ability => ability.ability.name).join(', ')
		};
		allPokemons.push(pokemon);
	  }
	}
  
	return allPokemons;
  };
  
  onMounted(async () => {
	pokemons.value = await getAllPokemons();
	startAutoSlide();
  });
  
  const startAutoSlide = () => {
	autoSlideInterval = setInterval(() => {
	  slideRight();
	}, 2000); // Cambia el valor 3000 por el intervalo de tiempo deseado en milisegundos (en este caso, 3 segundos)
  };
  
  const stopAutoSlide = () => {
	clearInterval(autoSlideInterval);
  };
  </script>
  
  <style scoped>
  .carousel-container {
	width: 60%;
	margin: 20px auto;
	overflow: hidden;
	position: relative;
  }
  
  .carousel {
	display: flex;
	transition: transform 0.5s ease;
  }
  
  .pokemon-card {
	border: 3px solid #09b568;
	padding: 30px;
	border-radius: 10px;
	text-align: center;
	width: 20rem;
  }
  
  .pokemon-image {
	width: 15rem;
	height: 14rem;
  }
  
  .prev-button,
  .next-button {
	background-color: rgba(226, 16, 16, 0.5);
	border-radius: 2rem;
	cursor: pointer;
	width: 10rem;
	height: 4rem;
  }
  </style>
  