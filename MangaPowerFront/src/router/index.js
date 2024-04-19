import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailCard from '../views/DetailCard.vue'
import Gallery from '../views/Gallery.vue'
import GameView from '../views/GameView.vue'
import LoginView from '../views/LoginView.vue' 
import PersonalFile from '../views/PersonalFile.vue'
import RegisterView from '../views/RegisterView.vue'
import StatsView from '../views/StatsView.vue'
import CardStore from '../views/CardStore.vue'
import AboutView from '../views/AboutView.vue'
import PersonalView from '../views/PersonalView.vue'
import PokedexView from '../views/PokedexView.vue'
import SelectView from '../views/game/SelectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
  path: '/stats',
  name: 'StatsView',
  component: StatsView
  },
  {
    path: '/detailcard/:id',
    name: 'DetailCard',
    component: DetailCard
  },
  {
    path: '/cardstore',
    name: 'CardStore',
    component: CardStore
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/game',
    name: 'GameView',
    component: GameView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/personalfile',
    name: 'PersonalFile',
    component: PersonalFile
  },
  {
    path: '/personal',
    name: 'Personal',
    component: PersonalView
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: PokedexView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/game/selectcards',
    name: 'SelectCards',
    component: SelectView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
