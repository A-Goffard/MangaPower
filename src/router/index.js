import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailCard from '../views/DetailCard.vue'
import Gallery from '../views/Gallery.vue'
import GameView from '../views/GameView.vue'
import LogingView from '../views/LogingView.vue'
import PersonalFile from '../views/PersonalFile.vue'
import RegisterView from '../views/RegisterView.vue'
import StatsView from '../views/StatsView.vue'
import CardStore from '../views/CardStore.vue'
/* import LogingPrueba from '../views/LogingPrueba.vue' */


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
    path: '/detailcard',
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
    path: '/loging',
    name: 'LogingView',
    component: LogingView
  },
/*   {
    path: '/prueba',
    name: 'LogingPrueba',
    component: LogingPrueba
  }, */
  {
    path: '/personalfile',
    name: 'PersonalFile',
    component: PersonalFile
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
