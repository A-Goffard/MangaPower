<template>
  <div>
    <h1>DETAIL CARD</h1>
    <div v-if="pokemon">
      <div>
        <strong>ID:</strong> {{ pokemon.id }}
      </div>

      <div>
        <strong>Name:</strong> {{ pokemon.name }}
      </div>

      <div>
        <strong>Abilities:</strong> {{ pokemon.abilities }}
      </div>

      <div>
        <strong>Image:</strong> <img :src="pokemon.image" :alt="pokemon.name">
      </div>
      <!-- Mostrar más detalles de la carta aquí -->
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'; // Importa useRoute desde vue-router

const pokemon = ref(null);
const route = useRoute(); // Utiliza useRoute para acceder a la ruta actual


console.log(route.params.id); // Accede al parámetro 'id' de la ruta actual
console.log(route.query.page); // Accede al parámetro de consulta 'page'
console.log(route.name); 

onMounted(() => {
  const pokemonData = JSON.parse(route.params.pokemon);
  pokemon.value = {
    id: pokemonData.id,
    name: pokemonData.name,
    image: pokemonData.image
  };
});

</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
