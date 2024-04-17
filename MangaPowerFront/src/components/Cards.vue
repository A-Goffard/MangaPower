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
                let hpStat = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
                let attackStat = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
                let defenseStat = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
                

                if (types.includes('fire')) {
                    let typeFire = document.createElement('div');
                    let nameFire = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');
                    
                    nameFire.textContent = name;
                    img.src = imageUrl;
                    
                    nameFire.style.backgroundColor = 'red';
                    nameFire.style.borderTopLeftRadius = '1.5rem';
                    nameFire.style.borderTopRightRadius = '1.5rem';
                    nameFire.style.color = 'white';
                    nameFire.style.textShadow = '2px 2px 2px black';
                    nameFire.style.paddingTop = '0.5rem'
                    img.style.width = '16rem';
                    img.style.height = '15rem';
                    typeFire.style.background = 'url("/backgrounds/fire-background.png"';
                    typeFire.style.backgroundSize = '16rem';
                    typeFire.style.height = '24.8rem';
                    typeFire.style.marginBottom = '2rem';
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeFire.appendChild(nameFire);
                    typeFire.appendChild(img);
                    typeFire.appendChild(statsList);
                    pokemonFire.appendChild(typeFire);
                } 
                else  if (types.includes('water')){
                    let typeWater = document.createElement('div');
                    let nameWater = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameWater.textContent = name; 
                    img.src = imageUrl;

                    nameWater.style.backgroundColor = 'blue';
                    nameWater.style.borderTopLeftRadius = '1.5rem';
                    nameWater.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeWater.appendChild(nameWater);
                    typeWater.appendChild(img);
                    typeWater.appendChild(statsList);
                    pokemonWater.appendChild(typeWater);
                }
                else if (types.includes('steel')){
                    let typeSteel = document.createElement('div');
                    let nameSteel = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameSteel.textContent = name;
                    img.src = imageUrl;

                    nameSteel.style.backgroundColor = 'grey';
                    nameSteel.style.borderTopLeftRadius = '1.5rem';
                    nameSteel.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeSteel.appendChild(nameSteel);
                    typeSteel.appendChild(img);
                    typeSteel.appendChild(statsList);
                    pokemonSteel.appendChild(typeSteel);
                }
                else if (types.includes('grass')){
                    let typeGrass = document.createElement('div');
                    let nameGrass = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameGrass.textContent = name;
                    img.src = imageUrl;

                    nameGrass.style.backgroundColor = 'green';
                    nameGrass.style.borderTopLeftRadius = '1.5rem';
                    nameGrass.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeGrass.appendChild(nameGrass);
                    typeGrass.appendChild(img);
                    typeGrass.appendChild(statsList);
                    pokemonGrass.appendChild(typeGrass);
                }
                else if (types.includes('electric')){
                    let typeElectric = document.createElement('div');
                    let nameElectric = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameElectric.textContent = name;
                    img.src = imageUrl;

                    nameElectric.style.backgroundColor = 'yellow';
                    nameElectric.style.borderTopLeftRadius = '1.5rem';
                    nameElectric.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeElectric.appendChild(nameElectric);
                    typeElectric.appendChild(img);
                    typeElectric.appendChild(statsList);
                    pokemonElectric.appendChild(typeElectric);
                }
                else if (types.includes('fighting')){
                    let typeFighting = document.createElement('div');
                    let nameFighting = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameFighting.textContent = name;
                    img.src = imageUrl;

                    nameFighting.style.backgroundColor = '#428287';
                    nameFighting.style.borderTopLeftRadius = '1.2rem';
                    nameFighting.style.borderTopRightRadius = '1.2rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeFighting.appendChild(nameFighting);
                    typeFighting.appendChild(img);
                    typeFighting.appendChild(statsList);
                    pokemonFighting.appendChild(typeFighting);
                }
                else if (types.includes('rock')){
                    let typeRock = document.createElement('div');
                    let nameRock = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameRock.textContent = name;
                    img.src = imageUrl;

                    nameRock.style.backgroundColor = '#1d1003';
                    nameRock.style.borderTopLeftRadius = '1.5rem';
                    nameRock.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeRock.appendChild(nameRock);
                    typeRock.appendChild(img);
                    typeRock.appendChild(statsList);
                    pokemonRock.appendChild(typeRock);
                }
                else if (types.includes('bug')){
                    let typeBug = document.createElement('div');
                    let nameBug = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameBug.textContent = name;
                    img.src = imageUrl;

                    nameBug.style.backgroundColor = '#4d8000';
                    nameBug.style.borderTopLeftRadius = '1.5rem';
                    nameBug.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeBug.appendChild(nameBug);
                    typeBug.appendChild(img);
                    typeBug.appendChild(statsList);
                    pokemonBug.appendChild(typeBug);
                }
                else if (types.includes('poison')){
                    let typePoison = document.createElement('div');
                    let namePoison = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    namePoison.textContent = name;
                    img.src = imageUrl;

                    namePoison.style.backgroundColor = 'purple';
                    namePoison.style.borderTopLeftRadius = '1.5rem';
                    namePoison.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typePoison.appendChild(namePoison);
                    typePoison.appendChild(img);
                    typePoison.appendChild(statsList);
                    pokemonPoison.appendChild(typePoison);
                }
                else if (types.includes('ground')){
                    let typeGround = document.createElement('div');
                    let nameGround = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameGround.textContent = name;
                    img.src = imageUrl;

                    nameGround.style.backgroundColor = '#804000';
                    nameGround.style.borderTopLeftRadius = '1.5rem';
                    nameGround.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeGround.appendChild(nameGround);
                    typeGround.appendChild(img);
                    typeGround.appendChild(statsList);
                    pokemonGround.appendChild(typeGround);
                }
                else if (types.includes('flying')){
                    let typeFlying = document.createElement('div');
                    let nameFlying = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameFlying.textContent = name;
                    img.src = imageUrl;

                    nameFlying.style.backgroundColor = '#7fbfff';
                    nameFlying.style.borderTopLeftRadius = '1.5rem';
                    nameFlying.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeFlying.appendChild(nameFlying);
                    typeFlying.appendChild(img);
                    typeFlying.appendChild(statsList);
                    pokemonFlying.appendChild(typeFlying);
                }
                else if (types.includes('psychic')){
                    let typePsychic = document.createElement('div');
                    let namePsychic = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    namePsychic.textContent = name;
                    img.src = imageUrl;

                    namePsychic.style.backgroundColor = '#ff69b4';
                    namePsychic.style.borderTopLeftRadius = '1.5rem';
                    namePsychic.style.borderTopRightRadius = '1.5rem'; 
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typePsychic.appendChild(namePsychic);
                    typePsychic.appendChild(img);
                    typePsychic.appendChild(statsList);
                    pokemonPsychic.appendChild(typePsychic);
                }
                else if (types.includes('normal')){
                    let typeNormal = document.createElement('div');
                    let nameNormal = document.createElement('h3');
                    let img = document.createElement('img');
                    let statsList = document.createElement('h6');

                    nameNormal.textContent = name;
                    img.src = imageUrl;

                    nameNormal.style.backgroundColor = '#898176';
                    nameNormal.style.borderTopLeftRadius = '1.5rem';
                    nameNormal.style.borderTopRightRadius = '1.5rem'; 
                    nameNormal.style.color = 'white';
                    nameNormal.style.textShadow = '2px 2px 2px black';
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
                    statsList.style.color = 'white';
                    statsList.style.height = '6rem';
                    statsList.style.backgroundColor = '#FFFFFF70';
                    statsList.style.borderRadius = '1rem';
                    statsList.style.marginLeft = '1rem';
                    statsList.style.marginRight = '1rem';
                    statsList.style.fontWeight = '800';
                    statsList.style.textShadow = '2px 1px 2px black';

                    let stats = ['HP: ' + hpStat, 'Attack: ' + attackStat, 'Defense: ' + defenseStat];
                    stats.forEach(stat => {
                        let statItem = document.createElement('p');
                        statItem.textContent = stat;
                        statsList.appendChild(statItem);
                    });

                    typeNormal.appendChild(nameNormal);
                    typeNormal.appendChild(img);
                    typeNormal.appendChild(statsList);
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
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}
</style>


