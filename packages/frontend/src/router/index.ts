import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/StartView.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/result/:value',
      name: 'result',
      component: () => import('../views/ResultView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: () => ({ name: 'home' })
    }
  ]
})

export default router
