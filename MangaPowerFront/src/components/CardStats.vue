<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="userData.pokemonTrainer" alt="Avatar del entrenador">
    <div class="card-body">
      <h2 class="card-title">{{ userData.name }}</h2>
      <p class="card-text">Username: {{ userData.username }}</p>
      <p class="card-text">Trainer Level: {{ userData.trainerLevel }}</p>
      <p class="card-text">Pokemon Level: {{ userData.pokemonLevel }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const userData = ref({
  name: '',
  username: '',
  trainerLevel: '',
  pokemonLevel: '',
  pokemonTrainer: ''
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/usuarios');
    userData.value = response.data[0];
  } catch (error) {
    console.error('Error:', error);
    /* alert('Error al obtener los datos del usuario') */;
  }
});
</script>

<style scoped>

</style>
