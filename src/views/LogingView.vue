<template>
    <div>
      <h1>LOGING</h1>
      <article>
        <div><span>Name </span><input type="text" id="name"></div>
        <div><span>Birthdate </span><input type="text" id="birthdate"></div>
        <div><span>Mail </span><input type="text" id="mail"></div>
        <div><span>UserName </span><input type="text" id="userName"></div>
        <div><span>Password </span><input type="text" id="password"></div>
        <div><span>Password </span><input type="text" id="passwordComprobation"></div>
        <div>
            <input class="checkbox" type="checkbox" name="checkbox" id="botoncillo"><span> Acepto la <a href="#">política de privacidad</a></span>
        </div>
        <button id="register" class="desactivado">Register</button>
    </article>
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
  
  </style>