<template>
  <div class="mainGameView">
    <Logo class="logo"/>
      <div class="pokemonContainer">
      <div v-for="(pokemonIdString, index) in winedPokemonIds" :key="index" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <CardPokemon :selectedPokemonId="parseInt(pokemonIdString)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import CardPokemon from '@/components/CardPokemon.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Define la URL de la API del servidor JSON
const apiUrl = 'http://localhost:3000/usuarios';

// Define una referencia para almacenar los IDs de Pokémon ganados por el usuario
const winedPokemonIds = ref([]);

// Define una referencia para almacenar el correo electrónico del usuario
const userEmail = ref('');

// Utiliza useRouter para obtener acceso al router
const router = useRouter();

// Función para obtener los datos del usuario desde la API del servidor JSON
const getUserData = async () => {
  try {
    // Realiza una solicitud GET a la API del servidor JSON
    const response = await fetch(`${apiUrl}?email=${userEmail.value}`);
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('No se pudo obtener los datos del usuario');
    }
    // Convierte la respuesta a formato JSON
    const userData = await response.json();
    // Verifica si se encontró algún usuario con el correo electrónico proporcionado
    if (userData.length > 0) {
      // Obtiene los IDs de Pokémon ganados del primer usuario encontrado
      winedPokemonIds.value = userData[0].winedCards;
    } else {
      // Si no se encuentra ningún usuario, redirige a la página de inicio de sesión
      router.push({ name: 'LoginView' });
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    console.error(error.message);
  }
};

// Llama a la función getUserData cuando la vista se monta
onMounted(() => {
  // Recupera el correo electrónico del usuario almacenado en localStorage
  const userData = JSON.parse(localStorage.getItem('datoslogin'));
  if (userData && userData.email) {
    // Almacena el correo electrónico del usuario en la referencia userEmail
    userEmail.value = userData.email;
    // Llama a la función para obtener los datos del usuario
    getUserData();
  } else {
    // Si no se encuentra el correo electrónico en localStorage, redirige a la página de inicio de sesión
    router.push({ name: 'LoginView' });
  }
});

// Define una referencia para el índice actual del carrusel
const currentIndex = ref(0);

// Función para avanzar al siguiente Pokémon en el carrusel
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % winedPokemonIds.value.length;
};

// Establece un intervalo para cambiar automáticamente las diapositivas cada 5 segundos
let intervalId;
onMounted(() => {
  intervalId = setInterval(nextSlide, 2500);
});
</script>

<style scoped>
.mainGameView {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover; 
  background-repeat: no-repeat; 
  background-image: url('/public/backgrounds/Backgroundacuarela.jpg');
  background-attachment: fixed;
}

.pokemonContainer {
 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden; /* Oculta el contenido que se desborda */
  white-space: nowrap; /* Evita que las diapositivas se envuelvan */
}

.pokemonContainer > div {
  flex: 0 0 auto; /* Evita que las diapositivas se ajusten */
  width: 40%; /* Ajusta el tamaño de cada diapositiva */
  transition: transform 0.5s ease; /* Agrega una transición suave */
}

</style>
