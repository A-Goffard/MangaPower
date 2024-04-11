<template>

<div class="container_global">

        <div class="containerStats">    

        <div class="name_stats">
            <h3>Name</h3>  
        </div>

        <div class="avatar_stats">
            <h3>Avatar</h3>
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
    width: 100%;
    height: 60rem;
};
 */
.containerStats{
    width: 100%;
    height: 100%;
    background-image: url('/public/images/Batalla_Pokemon.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
};

#graphic{
    margin: 0 auto;
};

.informationStats{
   /*  width: 33rem;
    height: 18rem; */
    /* position: absolute;
    left: 36%;
    top: 40%; */
    color: white;
    border: 0.1rem solid black;
    /* flex-direction: column; */
    justify-content: space-between;
}

.container_graphic{
    width: 40rem;
    height: 40rem;
    display: flex;
    justify-content: flex-end;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
};

.name_stats h3{
    color: white;
};

</style>

<!-- --------Inicio del JS--------- -->


<script setup>

import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

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
                    backgroundColor: "rgb(0,0,0)",
                    data: [7, 4, 6]
                }
            ]
        }
    });
});


</script>