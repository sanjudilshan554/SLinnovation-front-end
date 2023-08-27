import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'
import HomeView from '../views/Home.vue'
import loginView from '../views/login.vue'
import test from '../views/test.vue'
import registration from '../views/registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/login',
      name: 'login',
      component: loginView
    },

    {
      path: '/test',
      name: 'test',
      component: test
    },

    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
  ]
})

export default router
