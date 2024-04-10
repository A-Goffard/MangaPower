<template>
    <canvas id="graphic" width="400" height="400"></canvas>
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
                    data: [10, 4, 6]
                }
            ]
        }
    });
});
</script>

<style>
</style>

