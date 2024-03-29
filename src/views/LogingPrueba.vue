<template>
  <div class="general-container">
    <h1>REGISTER</h1>
    <div class="container-medium">

    <div class="input-container">
      <div class="log-lines"><span>Name </span><input type="text" id="name" v-model="inputName"></div>
      <div class="log-lines"><span>Birthdate </span><input type="date" id="birthdate" v-model="inputDate"></div>
      <div class="log-lines"><span>Mail </span><input type="email" id="mail" v-model="inputMail"></div>
      <div class="log-lines"><span>UserName </span><input type="text" id="userName" v-model="inputUserName"></div>
      <div class="log-lines"><span>Password </span><input type="password" id="password" v-model="inputPassword"></div>
      <div class="log-lines"><span>Password </span><input type="password" id="passwordComprobation" v-model="inputPasswordComprobation"></div>
      <div class="log-lines"><span>Pokemon Trainer </span>
        <select v-model="pokemonTrainer" @change="updateAvatar">
        <option value="Azumi">Azumi</option>
        <option value="Kansaki">Kansaki</option>
        <option value="Koruko">Koruko</option>
        <option value="Kumiko">Kumiko</option>
        <option value="Minato">Minato</option>
        </select>
      </div>
      
      <div class="log-lines"><span>Pokemon </span>
        <select v-model="pokemon" @change="updatePokemonImage">
        <option value="Bulbasaur">Bulbasaur</option>
        <option value="Charmander">Charmander</option>
        <option value="Squirtle">Squirtle</option>
        <option value="Pikachu">Pikachu</option>
        </select>
      </div>
      
      
      <div class="checkbox-div">
        <input type="checkbox" id="myCheckbox" v-model="agree">
        <label for="myCheckbox" class="custom-checkbox"></label>
        <span> By checking this box, I declare that I have read and expressly accepted <a href="#"><i>terms and conditions</i></a> as well as <a href="#"><i>privacy and confidentiality policy</i></a>. </span>
      </div>
      <button id="register" class="desactivado">Register</button>
    </div>
    <div class="avatars">
      <div class="avatar">
        <img :src="avatarImagePath" alt="">
        <h3>{{ pokemonTrainer }}</h3>

      </div>
      <div class="avatar">
        <img :src="pokemonImagePath" alt="">
        <h3>{{ pokemon }}</h3>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let inputName = ref('');
let inputDate = ref('');
let inputMail = ref('');
let inputUserName = ref('');
let inputPassword = ref('');
let inputPasswordComprobation = ref('');
let agree = ref(true);
let pokemonTrainer = ref('Minato');
let pokemon = ref('Bulbasaur');

const router = useRouter();

// Definir las rutas de las imágenes asociadas a cada opción
const avatarImages = {
  Azumi: 'avatar/Azumi.png',
  Kansaki: 'avatar/Kansaki.png',
  Koruko: 'avatar/Koruko.png',
  Kumiko: 'avatar/Kumiko.png',
  Minato: 'avatar/Minato.png',

  // Agrega el resto de opciones con sus rutas de imagen asociadas
};

const pokemonImages = {
  Bulbasaur: 'pokemon/Bulbasaur.png',
  Charmander: 'pokemon/Charmander.png',
  Squirtle: 'pokemon/Squirtle.png',
  Pikachu: 'pokemon/Pikachu.png',
  // Agrega el resto de opciones con sus rutas de imagen asociadas
};

// Actualizar la imagen del avatar cuando cambia la selección
const updateAvatar = () => {
  avatarImagePath.value = avatarImages[pokemonTrainer.value];
};

// Actualizar la imagen del Pokémon cuando cambia la selección
const updatePokemonImage = () => {
  pokemonImagePath.value = pokemonImages[pokemon.value];
};

// Rutas de las imágenes iniciales
const avatarImagePath = ref(avatarImages[pokemonTrainer.value]);
const pokemonImagePath = ref(pokemonImages[pokemon.value]);
</script>
  
<style scoped>
h3{
  margin: 0.5rem;
}
select{
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  background-color: #e6c7ac;
}
select option{
  text-align: left;
  background-color: #e6c7ac;
}
  button {
    margin: 0.5rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background-color: red;
  }
  .general-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/public/backgrounds/primary-background.jpg'); 
    background-size: cover; 
    background-repeat: no-repeat; 

  }
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min-content;
    padding: 1rem;
    background-color: rgb(255, 255, 255, 0.65);
    border-radius: 0.5rem;
    margin: 1rem;
  }
  .checkbox-div {
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
  }
  .log-lines{
    display: flex;
    justify-content: space-between;
    max-width: 40rem;
    width: 100%;
    gap: 1rem;
    align-items: center;
    margin: 0.5rem;
  }
  input{
    border-radius: 0.5rem;
  }
  #myCheckbox {
    display: none;
  }
  .custom-checkbox {
    width: 4.5rem;
    height: 1.3rem;
    background-color: #929292;
    border-radius: 5px;
    display: inline-block;
    position: relative;
  }
  #myCheckbox:checked + .custom-checkbox::after {
    content: '\2714'; /* Símbolo de marca de verificación */
    font-size: 1.45rem;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .avatars {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;
  }
  .container-medium{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min-content;
    padding: 1rem;
    margin: 1rem;
    background-color: rgb(255, 255, 255, 0.65);
    border-radius: 0.5rem;
  }
  img{
    max-width: 20rem;
    height: auto;
  }
    h1{
    color: white;
  }
</style>