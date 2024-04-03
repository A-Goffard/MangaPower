import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios, {isCancel, AxiosError} from 'axios';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from './App.vue'
import router from './router'


const firebaseConfig = {
    apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
    authDomain: "login-vue-mangapower.firebaseapp.com",
    projectId: "login-vue-mangapower",
    storageBucket: "login-vue-mangapower.appspot.com",
    messagingSenderId: "1067441727111",
    appId: "1:1067441727111:web:83457be5ec6ba90c617a22",
    measurementId: "G-3H58B9Y4PM"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
