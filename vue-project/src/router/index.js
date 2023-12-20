import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'
const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/crew',
      name: 'crew',
      component: Crew
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    }
  ]
})

export default router
