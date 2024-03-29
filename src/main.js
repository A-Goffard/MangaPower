import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios, {isCancel, AxiosError} from 'axios';


import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
