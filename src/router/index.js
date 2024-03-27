import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD

import DetailCard from '@/views/DetailCard.vue'
import Gallery from '@/views/Gallery.vue'
import PersonalFile from '@/views/PersonalFile.vue'
=======
import HomeView from '../views/HomeView.vue'
import Loging from '../views/register/Loging.vue'
import Register from '../views/register/Register.vue'
import Stats from '../views/Stats.vue'

>>>>>>> f50f72132adfbaf3e6679b9584fb35c6a3bbc2a3

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/detailcard',
      name: 'DetailCard',
      component: DetailCard
    },
    {
<<<<<<< HEAD
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/personalfile',
      name: 'PersonalFile',
      component: PersonalFile
    }
=======
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/loging',
      name: 'Loging',
      component: Loging,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats,
    },
>>>>>>> f50f72132adfbaf3e6679b9584fb35c6a3bbc2a3
  ]
})

export default router
