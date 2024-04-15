<template>

    <div class="container_graphic">
        <canvas id="graphic" width="100%" height="100%"></canvas>
    </div>
</template>

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

<style>

.container_graphic{
    width: 40rem;
    height: 40rem;
    margin: 0 auto;
}

</style>

