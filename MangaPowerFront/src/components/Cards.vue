<template>
<body class="cartasPage">

    <div id="CardsFire"></div>
    <div id="CardsWater"></div>
    <div id="CardsGrass"></div>
    <div id="CardsElectric"></div>
    <div id="CardsFighting"></div>
    <div id="CardsPoison"></div>
    <div id="CardsGround"></div>
    <div id="CardsFlying"></div>
    <div id="CardsPsychic"></div>
    <div id="CardsBug"></div>
    <div id="CardsRock"></div>
    <div id="CardsNormal"></div>
    <div id="CardsSteel"></div>
    <div id="CardsFire">
        <div v-for="pokemon in pokemons" :key="pokemon.id" @click="capturarNombrePokemon($event)">
            <img :src="pokemon.imageUrl" :alt="pokemon.name">
        </div>
    </div>
</body>
</template>


<script setup>

let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarPokemon(data.results))
    .catch(error => console.log(error)); 

const mostrarPokemon = (data) => {
    let pokemonFire = document.getElementById('CardsFire');
    let pokemonWater = document.getElementById('CardsWater');
    let pokemonGrass = document.getElementById('CardsGrass');
    let pokemonElectric = document.getElementById('CardsElectric');
    let pokemonFighting = document.getElementById('CardsFighting');
    let pokemonPoison = document.getElementById('CardsPoison');
    let pokemonGround = document.getElementById('CardsGround');
    let pokemonFlying = document.getElementById('CardsFlying');
    let pokemonPsychic = document.getElementById('CardsPsychic');
    let pokemonBug = document.getElementById('CardsBug');
    let pokemonRock = document.getElementById('CardsRock');
    let pokemonNormal = document.getElementById('CardsNormal');
    let pokemonSteel = document.getElementById('CardsSteel');

    data.forEach(pokemon => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
                let name = data.name;
                let imageUrl = data.sprites.other['official-artwork'].front_default;
                let types = data.types.map(type => type.type.name);
                let stats = data.stats;

                if (types.includes('fire')) {
                    let typeFire = document.createElement('div');
                    let nameFire = document.createElement('h3');
                    let img = document.createElement('img');
                    let stats = document.createElement('p')

                    nameFire.textContent = name; 
                    img.src = imageUrl;
                    
                    nameFire.style.color = 'white';
                    nameFire.style.textShadow = '2px 2px 2px black';
                    nameFire.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeFire.style.background = 'url("/backgrounds/fire-background.png"';
                    typeFire.style.backgroundSize = '16rem';
                    typeFire.style.height = '24.8rem';
                    typeFire.style.marginBottom = '2rem';

                    typeFire.appendChild(nameFire);
                    typeFire.appendChild(img);
                    pokemonFire.appendChild(typeFire);
                    pokemonFire.appendChild(stats);
                } 
                else  if (types.includes('water')){
                    let typeWater = document.createElement('div');
                    let nameWater = document.createElement('h3');
                    let img = document.createElement('img');

                    nameWater.textContent = name; 
                    img.src = imageUrl;

                    nameWater.style.color = 'white';
                    nameWater.style.textShadow = '2px 2px 2px black';
                    nameWater.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeWater.style.background = 'url("/backgrounds/water-background.png"';
                    typeWater.style.backgroundSize = '16rem';
                    typeWater.style.height = '24.8rem';
                    typeWater.style.width = '16rem';
                    typeWater.style.marginBottom = '2rem';

                    typeWater.appendChild(nameWater);
                    typeWater.appendChild(img);
                    pokemonWater.appendChild(typeWater);
                }
                else if (types.includes('steel')){
                    let typeSteel = document.createElement('div');
                    let nameSteel = document.createElement('h3');
                    let img = document.createElement('img');

                    nameSteel.textContent = name;
                    img.src = imageUrl;

                    nameSteel.style.color = 'white';
                    nameSteel.style.textShadow = '2px 2px 2px black';
                    nameSteel.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeSteel.style.background = 'url("/backgrounds/steel-background.png"';
                    typeSteel.style.backgroundSize = '16rem';
                    typeSteel.style.height = '24.3rem';
                    typeSteel.style.borderBottomLeftRadius = '1rem';
                    typeSteel.style.borderBottomRightRadius = '1rem';
                    typeSteel.style.width = '16rem';
                    typeSteel.style.marginBottom = '2rem';

                    typeSteel.appendChild(nameSteel);
                    typeSteel.appendChild(img);
                    pokemonSteel.appendChild(typeSteel);
                }
                else if (types.includes('grass')){
                    let typeGrass = document.createElement('div');
                    let nameGrass = document.createElement('h3');
                    let img = document.createElement('img');

                    nameGrass.textContent = name;
                    img.src = imageUrl;

                    nameGrass.style.color = 'white';
                    nameGrass.style.textShadow = '2px 2px 2px black';
                    nameGrass.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeGrass.style.background = 'url("/backgrounds/grass-background.png"';
                    typeGrass.style.backgroundSize = '16rem';
                    typeGrass.style.height = '24.8rem';
                    typeGrass.style.width = '16rem';
                    typeGrass.style.marginBottom = '2rem';

                    typeGrass.appendChild(nameGrass);
                    typeGrass.appendChild(img);
                    pokemonGrass.appendChild(typeGrass);
                }
                else if (types.includes('electric')){
                    let typeElectric = document.createElement('div');
                    let nameElectric = document.createElement('h3');
                    let img = document.createElement('img');

                    nameElectric.textContent = name;
                    img.src = imageUrl;

                    nameElectric.style.color = 'white';
                    nameElectric.style.textShadow = '2px 2px 2px black';
                    nameElectric.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeElectric.style.background = 'url("/backgrounds/electric-background.png"';
                    typeElectric.style.backgroundSize = '16rem';
                    typeElectric.style.height = '24.8rem';
                    typeElectric.style.width = '16rem';
                    typeElectric.style.marginBottom = '2rem';

                    typeElectric.appendChild(nameElectric);
                    typeElectric.appendChild(img);
                    pokemonElectric.appendChild(typeElectric);
                }
                else if (types.includes('fighting')){
                    let typeFighting = document.createElement('div');
                    let nameFighting = document.createElement('h3');
                    let img = document.createElement('img');

                    nameFighting.textContent = name;
                    img.src = imageUrl;

                    nameFighting.style.color = 'white';
                    nameFighting.style.textShadow = '2px 2px 2px black';
                    nameFighting.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeFighting.style.background = 'url("/backgrounds/fighting-background.png"';
                    typeFighting.style.backgroundSize = '16rem';
                    typeFighting.style.height = '24.3rem';
                    typeFighting.style.width = '16rem';
                    typeFighting.style.marginBottom = '2rem';

                    typeFighting.appendChild(nameFighting);
                    typeFighting.appendChild(img);
                    pokemonFighting.appendChild(typeFighting);
                }
                else if (types.includes('rock')){
                    let typeRock = document.createElement('div');
                    let nameRock = document.createElement('h3');
                    let img = document.createElement('img');

                    nameRock.textContent = name;
                    img.src = imageUrl;

                    nameRock.style.color = 'white';
                    nameRock.style.textShadow = '2px 2px 2px black';
                    nameRock.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeRock.style.background = 'url("/backgrounds/rock-background.png"';
                    typeRock.style.backgroundSize = '16rem';
                    typeRock.style.height = '24.8rem';
                    typeRock.style.width = '16rem';
                    typeRock.style.marginBottom = '2rem';
                    typeRock.style.borderBottomLeftRadius = '1.5rem';
                    typeRock.style.borderBottomRightRadius = '1.5rem';

                    typeRock.appendChild(nameRock);
                    typeRock.appendChild(img);
                    pokemonRock.appendChild(typeRock);
                }
                else if (types.includes('bug')){
                    let typeBug = document.createElement('div');
                    let nameBug = document.createElement('h3');
                    let img = document.createElement('img');

                    nameBug.textContent = name;
                    img.src = imageUrl;

                    nameBug.style.color = 'white';
                    nameBug.style.textShadow = '2px 2px 2px black';
                    nameBug.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeBug.style.background = 'url("/backgrounds/bug-background.png"';
                    typeBug.style.backgroundSize = '16rem';
                    typeBug.style.height = '24.8rem';
                    typeBug.style.width = '16rem';
                    typeBug.style.marginBottom = '2rem';

                    typeBug.appendChild(nameBug);
                    typeBug.appendChild(img);
                    pokemonBug.appendChild(typeBug);
                }
                else if (types.includes('poison')){
                    let typePoison = document.createElement('div');
                    let namePoison = document.createElement('h3');
                    let img = document.createElement('img');

                    namePoison.textContent = name;
                    img.src = imageUrl;

                    namePoison.style.color = 'white';
                    namePoison.style.textShadow = '2px 2px 2px black';
                    namePoison.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typePoison.style.background = 'url("/backgrounds/poison-background.png"';
                    typePoison.style.backgroundSize = '16rem';
                    typePoison.style.height = '24.8rem';
                    typePoison.style.width = '16rem';
                    typePoison.style.marginBottom = '2rem';
                    typePoison.style.borderBottomLeftRadius = '1.5rem';
                    typePoison.style.borderBottomRightRadius = '1.5rem';

                    typePoison.appendChild(namePoison);
                    typePoison.appendChild(img);
                    pokemonPoison.appendChild(typePoison);
                }
                else if (types.includes('ground')){
                    let typeGround = document.createElement('div');
                    let nameGround = document.createElement('h3');
                    let img = document.createElement('img');

                    nameGround.textContent = name;
                    img.src = imageUrl;

                    nameGround.style.color = 'white';
                    nameGround.style.textShadow = '2px 2px 2px black';
                    nameGround.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeGround.style.background = 'url("/backgrounds/ground-background.png"';
                    typeGround.style.backgroundSize = '16rem';
                    typeGround.style.height = '24.8rem';
                    typeGround.style.width = '16rem';
                    typeGround.style.marginBottom = '2rem';

                    typeGround.appendChild(nameGround);
                    typeGround.appendChild(img);
                    pokemonGround.appendChild(typeGround);
                }
                else if (types.includes('flying')){
                    let typeFlying = document.createElement('div');
                    let nameFlying = document.createElement('h3');
                    let img = document.createElement('img');

                    nameFlying.textContent = name;
                    img.src = imageUrl;

                    nameFlying.style.color = 'white';
                    nameFlying.style.textShadow = '2px 2px 2px black';
                    nameFlying.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeFlying.style.background = 'url("/backgrounds/flying-background.png"';
                    typeFlying.style.backgroundSize = '16rem';
                    typeFlying.style.height = '24.8rem';
                    typeFlying.style.width = '16rem';
                    typeFlying.style.marginBottom = '2rem';
                    typeFlying.style.borderBottomLeftRadius = '1.5rem';
                    typeFlying.style.borderBottomRightRadius = '1.5rem';

                    typeFlying.appendChild(nameFlying);
                    typeFlying.appendChild(img);
                    pokemonFlying.appendChild(typeFlying);
                }
                else if (types.includes('psychic')){
                    let typePsychic = document.createElement('div');
                    let namePsychic = document.createElement('h3');
                    let img = document.createElement('img');

                    namePsychic.textContent = name;
                    img.src = imageUrl;

                    namePsychic.style.color = 'white';
                    namePsychic.style.textShadow = '2px 2px 2px black'
                    namePsychic.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typePsychic.style.background = 'url("/backgrounds/psychic-background.png"';
                    typePsychic.style.backgroundSize = '16rem';
                    typePsychic.style.height = '24.8rem';
                    typePsychic.style.width = '16rem';
                    typePsychic.style.marginBottom = '2rem';

                    typePsychic.appendChild(namePsychic);
                    typePsychic.appendChild(img);
                    pokemonPsychic.appendChild(typePsychic);
                }
                else if (types.includes('normal')){
                    let typeNormal = document.createElement('div');
                    let nameNormal = document.createElement('h3');
                    let img = document.createElement('img');

                    nameNormal.textContent = name;
                    img.src = imageUrl;

                    nameNormal.style.color = 'white';
                    nameNormal.style.textShadow = '2px 2px 2px black';ç
                    nameNormal.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeNormal.style.background = 'url("/backgrounds/normal-background.png"';
                    typeNormal.style.backgroundSize = '16rem';
                    typeNormal.style.height = '24.8rem';
                    typeNormal.style.width = '16rem';
                    typeNormal.style.marginBottom = '2rem';
                    typeNormal.style.borderBottomLeftRadius = '1.5rem';
                    typeNormal.style.borderBottomRightRadius = '1.5rem';

                    typeNormal.appendChild(nameNormal);
                    typeNormal.appendChild(img);
                    pokemonNormal.appendChild(typeNormal);
                }
            })
            .catch(error => console.log(error));
    });
}


</script>

<style scoped>
.cartasPage{
    margin: auto;
    width: 100%;
    display: flex;
    gap: 2rem;
}
/* #CardsFire {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/fire-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsWater{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/water-background.png);
    background-repeat: column;
    background-size: 25rem; 
} */
/* #CardsGrass{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/grass-background.png);
    background-repeat: column;
    background-size: 25rem; 
} */
/* #CardsElectric{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/electric-background.png);
    background-repeat: column;
    background-size: 25rem; 
} */
/* #CardsFighting{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/fighting-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsPoison{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/poison-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsGround{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/ground-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsFlying{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/flying-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsPsychic{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/psychic-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsBug{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/bug-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsRock{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/rock-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsNormal{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/normal-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
/* #CardsSteel{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/steel-background.png);
    background-repeat: column;
    background-size: 25rem;
} */
</style>


