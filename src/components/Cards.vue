<template>
    <div id="contenedor">
        <!-- Aquí se agregarán las imágenes de los Pokémon -->
    </div>
</template>


<script setup>
let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarPokemon(data.results))
    .catch(error => console.log(error)); 

const mostrarPokemon = (data) => {
    let contenedor = document.getElementById('contenedor');

    data.forEach(pokemon => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
                let name = data.name;
                let imageUrl = data.sprites.other['official-artwork'].front_default;
                let types = data.types.map(type => type.type.name);

                if (types.includes('fire')) {
                    let divPokemon = document.createElement('div');
                    let divNombre = document.createElement('div');
                    let img = document.createElement('img');

                    divNombre.textContent = name; 
                    img.src = imageUrl;

                    divPokemon.appendChild(img);
                    divPokemon.appendChild(divNombre);
                    contenedor.appendChild(divPokemon);
                }
            })
            .catch(error => console.log(error));
    });
}
</script>

<style scoped>
#contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 30rem;
    border: solid;
}

img {
    border: 5px solid rgb(101, 101, 101);
    border-radius: 1.9rem;
    margin: 0.7rem;
    /* Cambia el tamaño de las imágenes según tus preferencias */
    width: 6rem;
    height: 10rem;
}
</style>


