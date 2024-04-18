<template>
  <div class="pokemon-card" v-if="pokemon">
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
  <div v-else>
    Loading...
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
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
        backgroundColor: '#ffcc00', // Default color
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
/* Additional styles can go here */
.pokemon-card {
  /* Add your styles here */
}
</style>

  
  