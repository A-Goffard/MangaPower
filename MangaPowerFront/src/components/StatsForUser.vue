<template>
    <div class="container_global">
      <div class="containerStats">
        <div class="name_stats">
          <h3>Username</h3>
          <div id="name_print_stats">{{ userDataActive && userDataActive.username }}</div>
          <div id="pokemon_level">
            Pokemon Level: {{ userDataActive && userDataActive.pokemonLevel }}
            <AvatarPokemon />
          </div>
          <div id="trainer_level">Trainer Level: {{ userDataActive && userDataActive.trainerLevel }}</div>
        </div>
        <div class="avatar_stats">
          <h3>Avatar</h3>
          <AvatarUser />
        </div>
        <div class="container_graphic">
          <canvas id="graphic" width="100%" height="100%"></canvas>
        </div>
      </div>
      <div class="informationTittle">
        <h2>PJ "Partidas jugadas" // PG "Partidas ganadas" // PP "Partidas perdidas"</h2>
      </div>
    </div>
  </template>



<!-- --------Inicio del JS--------- -->


<script setup>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';
import AvatarUser from '../components/AvatarUser.vue';
import AvatarPokemon from '../components/AvatarPokemon.vue';

// Datos del usuario activo
let userDataActive = ref(null);

// Función para obtener los datos del usuario del localStorage
const getUsuarioFromLocalStorage = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario && usuario.length > 0) {
    // Si hay datos de usuario en el localStorage, asignar el primer elemento del array a userData
    userDataActive.value = usuario[0];
    // Actualizar los datos del gráfico con los valores del usuario
    updateChart();
  }
};

// Función para actualizar los datos del gráfico
const updateChart = () => {
  if (!userDataActive.value) return;

  const plays = userDataActive.value.plays || 0;
  const wins = userDataActive.value.win || 0;
  const losses = userDataActive.value.lose || 0;

  // Actualizar los datos del gráfico
  chartInstance.data.datasets[0].data = [plays, wins, losses];
  chartInstance.update();
};

// Inicializar el gráfico
let chartInstance = null;

onMounted(() => {
  const MyCanvas = document.querySelector("#graphic").getContext("2d");

  chartInstance = new Chart(MyCanvas, {
    type: "pie",
    data: {
      labels: ["PJ", "PG", "PP"],
      datasets:[
        {
          label: "Estadísticas del jugador",
          backgroundColor: [
            'rgb(255, 231, 27)',
            'rgb(8, 33, 243)',
            'rgb(255, 5, 5)'
          ],
          data: [0, 0, 0] // Valores iniciales, se actualizarán después
        }
      ]
    }
  });
});

// Obtener los datos del usuario del localStorage al montar el componente
onMounted(getUsuarioFromLocalStorage);
</script>

<!-- --------Inicio del CSS--------- -->

<style scoped>

/* .container_global{
    
    height: 100rem;

};  */

.containerStats{
    width: 100%;
    height: 50rem;
    background-image: url('/public/images/Batalla_Pokemon.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
};

#graphic{
    margin: 0 auto;
    padding-top: 5rem;
}

.informationStats{
    height: 60rem;
    color: white;
    border: 0.1rem solid black;
    justify-content: space-between;
}

.container_graphic{
    width: 100%;
    height: 50rem;
    display: flex;
    justify-content: flex-end;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.avatar_stats h3{
    color: white;
    padding-top: 2rem;
}

.name_stats h3{
    color: white;
    padding-top: 2rem;
}
.name_stats{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

}

#name_print_stats{
    color: rgb(255, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>