<template>

          <div class="avatarContainer">
            <img class="avatar" :src="userData && `avatar/${userData.pokemonTrainer}.png`" alt="Avatar del entrenador">
          </div>
 
  </template>

<style scoped>
.avatarContainer {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min-content;
  padding: 1rem;
  margin: 1rem;
  background-color: rgb(255, 255, 255, 0.65);
  border-radius: 0.5rem;
}
.avatar {
    max-width: 20rem;
}

</style>

<script setup>
import { ref, onMounted } from 'vue';

// Definir una referencia para los datos del usuario
let userData = ref(null);

// Función para obtener los datos del usuario del localStorage
const getUsuarioFromLocalStorage = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario && usuario.length > 0) {
    // Si hay datos de usuario en el localStorage, asignar el primer elemento del array a userData
    userData.value = usuario[0];
  }
};

// Llamar a la función para obtener los datos del usuario al montar el componente
onMounted(getUsuarioFromLocalStorage);


</script>

