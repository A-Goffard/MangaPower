<template>
  <div>
    <h1>PERSONAL FILE</h1>
    <div class="container">
      <h2>AVATAR</h2>
      <h2>CARDS</h2>
      <div class="carousel-container">
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
      <h2>STATS</h2>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'PokemonCarousel',
  setup() {
    const carousel = ref(null);
    const position = ref(0);
    const cardWidth = 200; // Ancho de cada tarjeta de Pokémon
    const pokemons = ref([]);
    const router = useRouter();

    const slideLeft = () => {
      position.value += cardWidth;
      if (position.value > 0) {
        position.value = -(pokemons.value.length - 1) * cardWidth;
      }
      carousel.value.style.transform = `translateX(${position.value}px)`;
    };

    const slideRight = () => {
      position.value -= cardWidth;
      if (position.value < -(pokemons.value.length * cardWidth)) {
        position.value = 0;
      }
      carousel.value.style.transform = `translateX(${position.value}px)`;
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
          image: data.sprites.front_default,
          abilities: data.abilities.map(ability => ability.ability.name).join(', ')
        };
        pokemons.value.push(pokemon);
      }
    };

    const initCarousel = async () => {
      const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      await Promise.all(pokemonIds.map(async id => await getPokemonData(id)));
    };

    onMounted(initCarousel);

    const goToDetail = (pokemon) => {
  router.push({ name: 'DetailCard', params: { id: pokemon.id } });
};

 

    return {
      carousel,
      position,
      slideLeft,
      slideRight,
      pokemons,
      goToDetail
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.container {
  background-image: url('/public/images/plantilla_psiquico 2.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
}

h2 {
  margin-top: 5rem;
  height: 20rem;
  gap: 10px;
}

.carousel-container {
  width: 50%;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.pokemon-card {
  text-align: center;
  width: 40rem;
}

.pokemon-image {
  width: 20rem;
  height: 20rem;

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
