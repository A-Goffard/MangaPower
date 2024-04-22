<template>
  <div v-if="pokemon" :class="{ 'selected-card': selected, 'highlighted-card': highlight }" class="pokemon-card">
    <div :style="cardStyle">
      <h3 :style="nameStyle">{{ pokemon.name }}</h3>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" :style="imgStyle" />
      <div :style="statsListStyle">
        <p>HP: {{ getStatValue('hp') }}</p>
        <p>Attack: {{ getStatValue('attack') }}</p>
        <p>Defense: {{ getStatValue('defense') }}</p>
      </div>
    </div>
  </div>
  <div v-else class="pokemon-card-placeholder">
    <p>Pokemon not available</p>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardStyle() {
      return {
        background: `url(${this.pokemon.sprites.other['official-artwork'].front_default})`,
        backgroundSize: '16rem',
        height: '24.8rem',
        width: '16rem',
        marginBottom: '2rem'
      };
    },
    nameStyle() {
      return {
        backgroundColor: this.selected ? '#ffcc00' : '#000000', // Selected color or default
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem',
        color: 'white',
        textShadow: '2px 2px 2px black',
        paddingTop: '0.5rem'
      };
    },
    imgStyle() {
      return {
        width: '16rem',
        height: '15rem'
      };
    },
    statsListStyle() {
      return {
        color: 'white',
        height: '6rem',
        backgroundColor: '#FFFFFF70',
        borderRadius: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        fontWeight: '800',
        textShadow: '2px 1px 2px black'
      };
    }
  },
  methods: {
    getStatValue(statName) {
      const stat = this.pokemon.stats.find(s => s.stat.name === statName);
      return stat ? stat.base_stat : 'N/A';
    }
  }
};
</script>


<style scoped>
.pokemon-card {
  box-sizing: border-box; /* Ensure border and padding are included in the width */
}

.selected-card {
  border: 2px solid #ffcc00; /* Yellow border */
  box-shadow: 0 0 10px #ffcc00; /* Yellow shadow */
}

.winner-card {
  background-color: #66ff66; /* Winner background color */
  background: blue
}

.random-selected-card {
  background-color: #ff6666; /* Randomly selected background color */
}

.selected {
  border: 4px solid #ffcc00; /* Yellow border when selected */
  box-shadow: 0 0 10px #ffcc00; /* Yellow shadow when selected */
  margin: -4px; /* Compensate for the added border width */
}

.pokemon-card-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24.8rem;
  width: 16rem;
  background-color: #e0e0e0;
  border-radius: 1rem;
  margin-bottom: 2rem;
}
.pokemon-card-placeholder p {
  color: #333;
}

.highlighted-card {
  border: 4px solid #ffcc00;  /* You can change the color to whatever you prefer */
  box-shadow: 0 0 10px #ffcc00; /* Optional: adds a glowing effect */
}

</style>

  
  