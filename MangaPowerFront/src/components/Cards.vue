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

                if (types.includes('fire')) {
                    let typeFire = document.createElement('div');
                    let nameFire = document.createElement('h1');
                    let img = document.createElement('img');

                    nameFire.textContent = name; 
                    img.src = imageUrl;

                    nameFire.style.color = 'white';
                    nameFire.style.textShadow = '2px 2px 2px black';

                    typeFire.appendChild(img);
                    typeFire.appendChild(nameFire);
                    pokemonFire.appendChild(typeFire);
                } 
                else  if (types.includes('water')){
                    let typeWater = document.createElement('div');
                    let nameWater = document.createElement('h1');
                    let img = document.createElement('img');

                    nameWater.textContent = name; 
                    img.src = imageUrl;

                    nameWater.style.color = 'white';
                    nameWater.style.textShadow = '2px 2px 2px black';

                    typeWater.appendChild(img);
                    typeWater.appendChild(nameWater);
                    pokemonWater.appendChild(typeWater);
                }
                else if (types.includes('steel')){
                    let typeSteel = document.createElement('div');
                    let nameSteel = document.createElement('h1');
                    let img = document.createElement('img');

                    nameSteel.textContent = name;
                    img.src = imageUrl;

                    nameSteel.style.color = 'white';
                    nameSteel.style.textShadow = '2px 2px 2px black';

                    typeSteel.appendChild(img);
                    typeSteel.appendChild(nameSteel);
                    pokemonSteel.appendChild(typeSteel);
                }
                else if (types.includes('grass')){
                    let typeGrass = document.createElement('div');
                    let nameGrass = document.createElement('h1');
                    let img = document.createElement('img');

                    nameGrass.textContent = name;
                    img.src = imageUrl;

                    nameGrass.style.color = 'white';
                    nameGrass.style.textShadow = '2px 2px 2px black';

                    typeGrass.appendChild(img);
                    typeGrass.appendChild(nameGrass);
                    pokemonGrass.appendChild(typeGrass);
                }
                else if (types.includes('electric')){
                    let typeElectric = document.createElement('div');
                    let nameElectric = document.createElement('h1');
                    let img = document.createElement('img');

                    nameElectric.textContent = name;
                    img.src = imageUrl;

                    nameElectric.style.color = 'white';
                    nameElectric.style.textShadow = '2px 2px 2px black';

                    typeElectric.appendChild(img);
                    typeElectric.appendChild(nameElectric);
                    pokemonElectric.appendChild(typeElectric);
                }
                else if (types.includes('fighting')){
                    let typeFighting = document.createElement('div');
                    let nameFighting = document.createElement('h1');
                    let img = document.createElement('img');

                    nameFighting.textContent = name;
                    img.src = imageUrl;

                    nameFighting.style.color = 'white';
                    nameFighting.style.textShadow = '2px 2px 2px black';

                    typeFighting.appendChild(img);
                    typeFighting.appendChild(nameFighting);
                    pokemonFighting.appendChild(typeFighting);
                }
                else if (types.includes('rock')){
                    let typeRock = document.createElement('div');
                    let nameRock = document.createElement('h1');
                    let img = document.createElement('img');

                    nameRock.textContent = name;
                    img.src = imageUrl;

                    nameRock.style.color = 'white';
                    nameRock.style.textShadow = '2px 2px 2px black';

                    typeRock.appendChild(img);
                    typeRock.appendChild(nameRock);
                    pokemonRock.appendChild(typeRock);
                }
                else if (types.includes('bug')){
                    let typeBug = document.createElement('div');
                    let nameBug = document.createElement('h1');
                    let img = document.createElement('img');

                    nameBug.textContent = name;
                    img.src = imageUrl;

                    nameBug.style.color = 'white';
                    nameBug.style.textShadow = '2px 2px 2px black';

                    typeBug.appendChild(img);
                    typeBug.appendChild(nameBug);
                    pokemonBug.appendChild(typeBug);
                }
                else if (types.includes('poison')){
                    let typePoison = document.createElement('div');
                    let namePoison = document.createElement('h1');
                    let img = document.createElement('img');

                    namePoison.textContent = name;
                    img.src = imageUrl;

                    namePoison.style.color = 'white';
                    namePoison.style.textShadow = '2px 2px 2px black';

                    typePoison.appendChild(img);
                    typePoison.appendChild(namePoison);
                    pokemonPoison.appendChild(typePoison);
                }
                else if (types.includes('ground')){
                    let typeGround = document.createElement('div');
                    let nameGround = document.createElement('h1');
                    let img = document.createElement('img');

                    nameGround.textContent = name;
                    img.src = imageUrl;

                    nameGround.style.color = 'white';
                    nameGround.style.textShadow = '2px 2px 2px black';

                    typeGround.appendChild(img);
                    typeGround.appendChild(nameGround);
                    pokemonGround.appendChild(typeGround);
                }
                else if (types.includes('flying')){
                    let typeFlying = document.createElement('div');
                    let nameFlying = document.createElement('h1');
                    let img = document.createElement('img');

                    nameFlying.textContent = name;
                    img.src = imageUrl;

                    nameFlying.style.color = 'white';
                    nameFlying.style.textShadow = '2px 2px 2px black';

                    typeFlying.appendChild(img);
                    typeFlying.appendChild(nameFlying);
                    pokemonFlying.appendChild(typeFlying);
                }
                else if (types.includes('psychic')){
                    let typePsychic = document.createElement('div');
                    let namePsychic = document.createElement('h1');
                    let img = document.createElement('img');

                    namePsychic.textContent = name;
                    img.src = imageUrl;

                    namePsychic.style.color = 'white';
                    namePsychic.style.textShadow = '2px 2px 2px black';

                    typePsychic.appendChild(img);
                    typePsychic.appendChild(namePsychic);
                    pokemonPsychic.appendChild(typePsychic);
                }
                else if (types.includes('normal')){
                    let typeNormal = document.createElement('div');
                    let nameNormal = document.createElement('h1');
                    let img = document.createElement('img');

                    nameNormal.textContent = name;
                    img.src = imageUrl;

                    nameNormal.style.color = 'white';
                    nameNormal.style.textShadow = '2px 2px 2px black';

                    typeNormal.appendChild(img);
                    typeNormal.appendChild(nameNormal);
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
}
#CardsFire {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/fire-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsWater{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/water-background.png);
    background-repeat: column;
    background-size: 25rem; 
}
#CardsGrass{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/grass-background.png);
    background-repeat: column;
    background-size: 25rem; 
}
#CardsElectric{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/electric-background.png);
    background-repeat: column;
    background-size: 25rem; 
}
#CardsFighting{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/fighting-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsPoison{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/poison-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsGround{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/ground-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsFlying{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/flying-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsPsychic{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/psychic-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsBug{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/bug-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsRock{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/rock-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsNormal{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/normal-background.png);
    background-repeat: column;
    background-size: 25rem;
}
#CardsSteel{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25rem;
    background: url(/public/backgrounds/steel-background.png);
    background-repeat: column;
    background-size: 25rem;
}
</style>


