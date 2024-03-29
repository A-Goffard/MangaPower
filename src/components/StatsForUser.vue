<template>

<div class="containerStats">

    <div class="informationStats">
        <h3>Name</h3>
        <h3>Avatar</h3>
        <h3>Stats</h3>
    </div>

</div>
<div class="informationTittle">
    <h2>PJ "Partidas jugadas" // PG "Partidas ganadas" // PP "Partidas perdidas"</h2>
</div>


</template>

<style>

.containerStats{
    width: 100%;
    height: 60rem;
    background-image: url('/public/images/1366_2000.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    
}

.informationStats{
    width: 33rem;
    height: 18rem;
    border: 0.1rem solid red;
    position: absolute;
    left: 36%;
    top: 40%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.informationStats h3{
    margin: 0.5rem;
}



</style>

<script setup>


</script>