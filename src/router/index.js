import { createRouter, createWebHistory } from 'vue-router'

import DetailCard from '@/views/DetailCard.vue'
import Gallery from '@/views/Gallery.vue'
import PersonalFile from '@/views/PersonalFile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/detailcard',
      name: 'DetailCard',
      component: DetailCard
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/personalfile',
      name: 'PersonalFile',
      component: PersonalFile
    }
  ]
})

export default router
