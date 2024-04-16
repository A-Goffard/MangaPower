<template>
    <div class="container_global">
      <div class="containerStats"> 
        <div class="name_stats">
          <h3>User</h3>  
          <div id="name_print_stats">{{ userData && userData.name }}</div>
        </div>
        <div class="avatar_stats">
          <h3>Avatar</h3>
          <div id="avatar_print_stats">{{ userData && userData.avatar }}</div>
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
        userData.value = response.data[1];
     } catch (error) {
        console.error('Error:', error);
        /* alert('Error al obtener los datos del usuario') */;
    }
});
</script>

