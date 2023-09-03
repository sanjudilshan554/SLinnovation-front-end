import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'
import HomeView from '../views/Home.vue'
import loginView from '../views/login.vue'
import test from '../views/test.vue'
import registration from '../views/registration.vue'
import teamwork from '../views/teamwork.vue'
import teamRegistration from '../views/teamRegistration.vue'
import selfworkcreation from '../views/selfWorkCreation.vue'
import teamworkInside from '../views/teamworkInside.vue'
import selfworkInside from '../views/selfworkInside.vue'
import selfwork from '../views/selfwork.vue'
import askhelp from '../views/askHelp.vue'
import helpArea from '../views/helpArea.vue'
import viewFullDetails from '../views/viewFullDetails.vue'

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
    {
      path: '/teamwork',
      name: 'teamwork',
      component: teamwork
    },
    
    {
      path: '/teamRegistration',
      name: 'teamRegistration',
      component: teamRegistration
    },

    {
      path: '/selfworkcreation',
      name: 'selfworkcreation',
      component: selfworkcreation
    },

    {
      path: '/teamworkInside',
      name: 'teamworkInside',
      component: teamworkInside
    },

    {
      path: '/selfworkInside',
      name: 'selfworkInside',
      component: selfworkInside
    },

    {
      path: '/selfwork',
      name: 'selfwork',
      component: selfwork
    },

    {
      path: '/askhelp',
      name: 'askhelp',
      component: askhelp
    },

    {
      path: '/helpArea',
      name: 'helpArea',
      component: helpArea
    },

    {
      path: '/viewFullDetails',
      name: 'viewFullDetails',
      component: viewFullDetails
    },
  ]
})

export default router
