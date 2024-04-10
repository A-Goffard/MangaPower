<template>
  <div class="general-container">
    <h1>LOGIN</h1>
    <article>
      <div class="log-lines">
        <span>Email</span>
        <input type="email" id="email" placeholder="Enter email" v-model="email">
      </div>
      <div class="log-lines">
        <span>Password</span>
        <input type="password" id="password" placeholder="Enter Password" v-model="password">
      </div>
      <div class="checkbox-div">
        <input type="checkbox" id="myCheckbox" v-model="agree">
        <label for="myCheckbox" class="custom-checkbox"></label>
        <span>
          By checking this box, I declare that I have read and expressly accepted 
          <a href="#"><i>terms and conditions</i></a> as well as 
          <a href="#"><i>privacy and confidentiality policy</i></a>.
        </span>
      </div>
      <button @click.prevent="guardarDatos" type="submit" id="login" :disabled="!agree">Login</button>
      <p>If you don't have an account, create one by clicking here</p>
      <button id="register" @click="gotoRegister">Register</button>
    </article>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const email = ref("");
const password = ref("");
const agree = ref(false);

const gotoRegister = () => {
  router.push('/register');
};

const guardarDatos = () => {
  const login = {
    email: email.value,
    password: password.value
  };
  localStorage.setItem("datoslogin", JSON.stringify(login));
  proveLogin();
};

const gotoPersonalPage = () => {
  router.push('/personalfile');
};

const proveLogin = () => {
  const datosRegistradosJSON = localStorage.getItem('personalFileData');

  if (!datosRegistradosJSON) {
    alert('No hay ningún usuario registrado');
    gotoRegister();
    return;
  }

  const datosRegistrados = JSON.parse(datosRegistradosJSON);
  const emailLogin = email.value;
  const passwordLogin = password.value;

  for (const usuario in datosRegistrados) {
    const usuarioRegistrado = datosRegistrados[usuario];

    if (usuarioRegistrado.email === emailLogin && usuarioRegistrado.password === passwordLogin) {
      alert('¡Inicio de sesión exitoso!');
      gotoPersonalPage();
      return;
    }
  }

  alert('Datos incorrectos o usuario no registrado');
  gotoRegister();
};
</script>

  
<style scoped>
  button {
    margin: 0.5rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background-color: red;
  }
  .general-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/public/backgrounds/primary-background.jpg'); 
    background-size: cover; 
    background-repeat: no-repeat; 

  }
  article {
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
  h1{
    color: white;
  }
  p{
    margin: 0;
  }
</style>