<template>
    <div class="container_global">
      
        <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.username }}</div>
      
      <div class="containerStats">

        <div class="name_stats card">
          <div class="card-body">
            <!-- <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.username }}</div> -->
            <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.pokemon }}</div>
            
            <AvatarPokemon />
            <div class="card-text">Pokemon Level: {{ userDataActive && userDataActive.pokemonLevel }}</div>
          </div>
        </div>
        <div class="avatar_stats card">
          <div class="card-body">
            <div id="name_print_stats" class="card-text">{{ userDataActive && userDataActive.pokemonTrainer }}</div>
            <AvatarUser />
            <div class="card-text">Trainer Level: {{ userDataActive && userDataActive.trainerLevel }}</div>
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
  
  <style scoped>
  /* Estilos Bootstrap */
  .container_global {
    background-size: cover;
    background-position: center;
    height:100vh;
  }
  
  .containerStats {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 0 auto;
  }
  
  .containerStats .card {
    margin-bottom: 20px;
  }
  
  #name_print_stats.card-text {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container_graphic .card-body {
    height: 50rem;
  }
  
  .card-body {
    width: 30rem;
    height: 20rem;
    background-color: transparent;
    padding: 1rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    opacity: 1;
  }

  .card-title {
    color: white;
  }

  .card-text{
    color: white;
  }

.name_stats.card{
    
    height: auto;
  } 

.informationTittle h2{
    font-size: 2rem;
    font-weight: 900;
    color: rgb(255, 255, 255);
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
    font-size: 5rem;
  }
  #name_print_stats{ 
    font-size: 2rem;
    font-weight: 900;
    color: rgb(255, 255, 255);
   

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
  