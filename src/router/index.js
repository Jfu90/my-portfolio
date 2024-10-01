import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/FrontEndView.vue')
    },
    {
      path: '/front-end',
      component: () => import('../views/FrontEndView.vue')
    },
    {
      path: '/test',
      component: () => import('../views/TestView.vue')
    },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotfindView.vue') }
  ]
})

export default router
