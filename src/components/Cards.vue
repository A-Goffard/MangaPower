<template>
    <div>
        <div class="cardsBackground">
            <img id="grounType" src="backgrounds/ground-background.png" alt="1">
            <img id="electricType" src="backgrounds/electric-background.png" alt="2">
            <img id="bugType" src="backgrounds/bug-background.png" alt="3">
            <img id="figthType" src="backgrounds/figth-background.png" alt="4">
            <img id="flyingType" src="backgrounds/flying-background.png" alt="5">
            <img id="steelType" src="backgrounds/steel-background.png" alt="6">
            <img id="rockType" src="backgrounds/rock-background.png" alt="8">
            <img id="waterType" src="backgrounds/water-background.png" alt="9">
            <img id="normalType" src="backgrounds/normal-background.png" alt="10">
            <img id="psiquicType" src="backgrounds/psiquic-background.png" alt="11">
            <img id="fireType" src="backgrounds/fire-background.png" alt="12">
            <img id="poisonType" src="backgrounds/poison-background.png" alt="13">
        </div>
    </div>
    <div id="contenedor">

    </div>
</template>

<script setup>
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

    fetch(url)
    .then(response => response.json())
    .then(data => mostrarPokemon(data.results))
    .catch(error => console.log(error)); 
    
    const mostrarPokemon = (data) => {
        let contenedor = document.getElementById('contenedor');

        data.forEach(pokemon => {
            let name = name.url.sprites.other.official-artwork.front_default;
            let imagen = url.sprites.other.official-artwork.front_default; 
            
            let divPokemon = document.createElement('div');
            let divNombre = document.createElement('div');
            let img = document.createElement('img');

            divNombre.textContent = nombre; 
            img.src = imagen;

            divPokemon.appendChild(img);
            divPokemon.appendChild(divNombre);
            contenedor.appendChild(divPokemon);

            
        });
    }
</script>

<style scoped>
.cardsBackground{
    margin: auto;
    align-content: center;
    width: 95rem;
    height: 45rem;
    border: solid black;
}
img{
    border: 5px solid rgb(101, 101, 101);
    border-radius: 1.9rem;
    width: 14rem;
    height: 20rem;
    margin: 0.7rem;
}
</style>