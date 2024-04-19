<template>
    <div class="container_global">
      <div class="containerStats">
        <div class="name_stats card">
          <div class="card-body">
            <h3 class="card-title">Username</h3>
            <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.username }}</div>
            <div class="card-text">Pokemon Level: {{ userDataActive && userDataActive.pokemonLevel }}</div>
            <div class="card-text">Trainer Level: {{ userDataActive && userDataActive.trainerLevel }}</div>
            <AvatarPokemon />
          </div>
        </div>
        <div class="avatar_stats card">
          <div class="card-body">
            <h3 class="card-title">Avatar</h3>
            <AvatarUser />
          </div>
        </div>
        <div class="container_graphic card">
          <div class="card-body">
            <h3 class="card-title">Estadísticas del jugador</h3>
            <canvas id="graphic" width="100%" height="100%"></canvas>
          </div>
        </div>
      </div>
      <div class="informationTittle">
        <h2>PJ "Partidas jugadas" // PG "Partidas ganadas" // PP "Partidas perdidas"</h2>
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
  
  <style scoped>
  /* Estilos Bootstrap */
  .container_global {
    background-size: cover;
    background-position: center;
    height:100vh;
  }
  
  .containerStats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 0.5rem;
  }
  
  .containerStats .card {
    margin-bottom: 20px;
  }
  

  
  .container_graphic .card-body {
    height: 50rem;
  }
  
  .card-body {
    width: 30rem;
    height: 20rem;
    background-color: transparent;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    opacity: 1;
  }

.name_stats.card{
    
    height: auto;
  } 

.informationTittle h2{
    font-size: 2rem;
    font-weight: 900;
    color: black;
  }

  /* Eliminación del color de fondo */
.name_stats.card,
.avatar_stats.card,
.container_graphic.card {
    background-color: transparent;
    border: none;
}

  .name_stats.card{
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;    
  }

  .avatar_stats.card{
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .container_graphic.card{
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .informationTittle{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }


/*   ----- Responsive----- */


@media only screen and (max-width: 1150px) {
   .containerStats {
      grid-template-columns: repeat(1, 1fr);
   }
   .card-body {
      width: 80%;
      height: auto;
   }
}

@media screen and (max-width: 768px) {
   .containerStats {
      grid-template-columns: repeat(1, 1fr);
   }
}

  

  
  </style>
  