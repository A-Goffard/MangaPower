<template>
  <div class="general-container">
    <h1>REGISTER</h1>
    <div class="container-medium">

    
    <div class="input-container">
      <div class="log-lines"><span>Name </span><input type="text" id="name"></div>
      <div class="log-lines"><span>Birthdate </span><input type="date" id="birthdate"></div>
      <div class="log-lines"><span>Mail </span><input type="email" id="mail"></div>
      <div class="log-lines"><span>UserName </span><input type="text" id="userName"></div>
      <div class="log-lines"><span>Password </span><input type="password" id="password"></div>
      <div class="log-lines"><span>Password </span><input type="password" id="passwordComprobation"></div>
      <div class="checkbox-div">
        <input type="checkbox" id="myCheckbox">
        <label for="myCheckbox" class="custom-checkbox"></label>
        <span> By checking this box, I declare that I have read and expressly accepted <a href="#"><i>terms and conditions</i></a> as well as <a href="#"><i>privacy and confidentiality policy</i></a>. </span>
      </div>
      <button id="register" class="desactivado">Register</button>
    </div>
    <div class="avatars">
      <div class="avatar">
        <img src="avatar/l.png" alt="">
        <span>Pokemon Trainer</span>
      </div>
      <div class="avatar">
        <img src="pokemon/bulbasaur.png" alt="">
        <span>Pokemon</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    fitxa: {
      type: Object,
      required: true
    }
  });
</script>
  
<style scoped>
  .general-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/public/backgrounds/water-background.png'); 
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
</style>