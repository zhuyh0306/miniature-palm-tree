import { createRouter, createWebHistory } from 'vue-router'

const staticRoutes = [
  {
    path: '/login',
    component: () =>
      import(/*webpackChunkName:login*/ '@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: staticRoutes
})

export default router
