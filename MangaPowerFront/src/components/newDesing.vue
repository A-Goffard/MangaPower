<template>

    <div class="globalContainer">
      
        <AvatarPokemon />

        <div class="card-text">Pokemon Level: {{ userDataActive && userDataActive.pokemonLevel }}</div>

        <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.username }}</div>

        <AvatarUser />

          <div class="canvaContainer">
            <canvas id="graphic" width="100%" height="100%"></canvas>
          </div>

    </div>

</template>

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
      /* updateChart(); */
    }
  };
  // Obtener los datos del usuario del localStorage al montar el componente
  onMounted(getUsuarioFromLocalStorage);

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
              'rgb(219, 219, 223)',
              'rgb(20, 5, 255)',
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

<style>

.globalContainer {
    width: 100vw;
    height: 100vh;
    background-image: url("/home/alumno/MangaPower/MangaPowerFront/public/images/Stats.png");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    margin-left: 20rem;
    position: fixed;
    top: 0;
    left: 0;
    position: relative;
  
}

.avatarContainer{
    height: 15rem;
    position: absolute;
    right: 90rem;
    top: 18rem;
}
.avatar{
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
    right: 92rem;
    top: 33rem;

}

#name_print_stats{
    color: aliceblue;
    position: absolute;
    right: 97rem; 
    top: 51.5rem;  
    font-size: 2rem; 
}

.avatarContainerUser{
    height: 15rem;
    position: absolute;
    right: 104.5rem;
    top: -3rem;
    
}

.canvaContainer{
  width: 25rem;
  height: 10rem;
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