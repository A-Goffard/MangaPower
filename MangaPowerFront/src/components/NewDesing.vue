<template>

    <div class="globalContainer">

      <div class="statsContainer">
      
        <AvatarPokemonStats />

        <div class="card-text">Pokemon Level: {{ userDataActive && userDataActive.pokemonLevel }}</div>
        <div class="card-text-trainer">Trainer Level: {{ userDataActive && userDataActive.trainerLevel }}</div>
        <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.username }}</div>

        <AvatarUserStats />

          <div class="canvaContainer">
            <canvas id="graphic" width="100%" height="100%"></canvas>
          </div>

        </div>

    </div>

</template>

<script setup>

import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';
import AvatarUserStats from '../components/AvatarUserStats.vue';
import AvatarPokemonStats from '../components/AvatarPokemonStats.vue';

// Datos del usuario activo
let userDataActive = ref(null);

// Función para obtener los datos del usuario del localStorage

const getUsuarioFromLocalStorage = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario && usuario.length > 0) {
    // Si hay datos de usuario en el localStorage, asignar el primer elemento del array a userData
    userDataActive.value = usuario[0];
    
  }
};
// Obtener los datos del usuario del localStorage al montar el componente
onMounted(getUsuarioFromLocalStorage);

// Inicializar el gráfico
let chartInstance = null;

onMounted(() => {
  const MyCanvas = document.querySelector("#graphic").getContext("2d");

  chartInstance = new Chart(MyCanvas, {
    type: "bar",
    data: {
      labels: ["PJ", "PG", "PP"],
      datasets:[
        {
          label: "Estadísticas del jugador",
          backgroundColor: [
            'rgb(219, 219, 223)',
            'rgb(20, 5, 255)',
            'rgb(255, 5, 5)'
          ],
          data: [0, 0, 0] // Valores iniciales, se actualizarán después
        }
      ]
    }
  });

  // Llamar a la función updateChart después de que chartInstance se haya inicializado
  updateChart();
});

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

// Obtener los datos del usuario del localStorage al montar el componente
onMounted(getUsuarioFromLocalStorage);
  
</script>

<style>

.globalContainer {
   
    width: 100vw;
    height: 100vh;
    background-image: url('/public/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai.jpg');
}

.statsContainer{
  width: 80vw;
    height: 100vh;
    background-image: url("/public/images/Stats.png");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    margin-left: 20rem;
    position: fixed;
    top: 0;
    left: 0;
    position: relative;
}
.avatarPokemon{
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
}

.avatarUser{
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    
}

.card-text{
    width: 10rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    color: aliceblue;
    font-weight: 800;
    position: absolute;
    right: 70rem;
    top: 34rem;

}

.card-text-trainer{
    width: 10rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    color: aliceblue;
    font-weight: 800;
    position: absolute;
    right: 70rem;
    top: 32rem;
}

#name_print_stats{
    color: aliceblue;
    position: absolute;
    right: 73rem; 
    top: 51.5rem;  
    font-size: 2rem; 
}

.avatarContainerUser{
    height: 15rem;
    position: absolute;
    right: 80.5rem;
    top: -3rem;    
}

.avatarContainerPokemon{
    height: 15rem;
    position: absolute;
    right: 68rem;
    top: 18rem;
}

.canvaContainer{
  width: 25rem;
  height: 9.5rem;
  position: absolute;
  top: 19.5rem;
  left: 52rem;
}

#graphic{
  max-width: 100%;
  max-height: 100%;

}

/* --------MEDIA QUERIES--------- */

@media screen and (max-width: 1200px){
  
}

</style>