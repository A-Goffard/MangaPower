<template>
    <div class="container_global">
      <div class="containerStats"> 
        <div class="name_stats">
            <div id="name_print_stats">{{ userData && userData.name }}</div>  
          <div class="stats_user">
        
            <div id="pokemon_user">{{ userData && userData.pokemon }}</div>           
            <div id="pokemon_level">Pokemon Level: {{ userData && userData.pokemonLevel }}</div>
            <div id="trainer_level">Trainer Level: {{ userData && userData.trainerLevel }}</div>
            <div id="username">Username: {{ userData && userData.username }}</div>

          </div>
        </div>
        <div class="avatar_stats">
          <h3>Avatar</h3>
          <img :src="userData && userData.pokemonTrainer" alt="Avatar del entrenador">
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
  

<!-- --------Inicio del CSS--------- -->

<style>

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
    align-items: center;
    padding: 1rem;
    height: 100%;

}

#name_print_stats{
    font-size: 5rem;
    font-weight: 800;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}
.stats_user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
    gap: 2rem;
    padding: 1rem;
    color: white;
}

</style>

<!-- --------Inicio del JS--------- -->


<script setup>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';
import axios from 'axios';

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
                    data: [15, 3, 2]
                }
            ]
        }
    });
});

/* Traer los datos del JSON server para pintarlos de forma dinámica */

let userData = ref(null);

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

