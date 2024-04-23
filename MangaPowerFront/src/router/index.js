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
import BattleView from '../views/game/BattleView.vue'
import Battle2View from '../views/game/Battle2View.vue'
import Battle3View from '../views/game/Battle3View.vue'
import Battle4View from '../views/game/Battle4View.vue'
import Battle5View from '../views/game/Battle5View.vue'
import Battle6View from '../views/game/Battle6View.vue'

import WinedCardsView from '../views/user/WinedCardsView.vue'

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
    name: 'PersonalView',
    component: PersonalView
  },
  {
    path: '/pokedex',
    name: 'PokedexView',
    component: PokedexView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/game/selectcards',
    name: 'SelectCards',
    component: SelectView
  },
  {
    path: '/user/winedcards',
    name: 'WinedCardsView',
    component: WinedCardsView
  },
  {
    path: '/game/battle',
    name: 'BattleView',
    component: BattleView
  },
  {
    path: '/game/battle2',
    name: 'Battle2View',
    component: Battle2View
  },
  {
    path: '/game/battle3',
    name: 'Battle3View',
    component: Battle3View
  },
  {
    path: '/game/battle4',
    name: 'Battle4View',
    component: Battle4View
  },
  {
    path: '/game/battle5',
    name: 'Battle5View',
    component: Battle5View
  },
  {
    path: '/game/battle6',
    name: 'Battle6View',
    component: Battle6View
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
