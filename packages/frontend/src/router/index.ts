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
      component: () => import('../views/MyQuestionnaireView.vue')
    },
    {
      path: '/invite',
      name: 'invite',
      component: () => import('../views/InviteView.vue')
    },
    {
      path: '/invite/:value',
      name: 'invite-questionnair',
      component: () => import('../views/InviteQuestionnaireView.vue')
    },
    {
      path: '/invite/:value/start',
      name: 'invite-questionnair-start',
      component: () => import('../views/StartInviteQuestionnaireView.vue')
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
