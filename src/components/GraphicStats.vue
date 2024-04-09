<template>

    <canvas id="graphic" width="400" height="400"></canvas>

</template>

<script setup>

import Chart from 'chart.js/auto';

let MyCanvas = document.querySelector("#graphic").getContext("2d");

let chart = new Chart(MyCanvas, {
    type: "bar",
    data: {
        labels: ["PJ", "PG", "PP"],
        datasets:[
            {
                label: "Estadísticas del jugador",
                data: [10, 4, 6]
            }
        ]
    }
});

</script>

<style>
</style>
