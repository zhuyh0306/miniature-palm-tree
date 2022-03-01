import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout'
import UserManageRouter from './modules/UserManage'
import RoleListRouter from './modules/RoleList'
import PermissionListRouter from './modules/PermissionList'
import ArticleRouter from './modules/Article'
import ArticleCreaterRouter from './modules/ArticleCreate'
/**
 * 私有路由表
 */
export const privateRoutes = [
  UserManageRouter,
  RoleListRouter,
  PermissionListRouter,
  ArticleRouter,
  ArticleCreaterRouter
]

export const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName:login*/ '@/views/login/index.vue')
  },

  {
    path: '/',
    name: 'index',
    redirect: '/profile',
    component: Layout,
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: import(/* webpackChunkName:profile*/ '@/views/profile')
      },
      {
        path: '/user/import',
        name: 'import',
        component: () =>
          import(/* webpackChunkName:login*/ '@/views/import/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: publicRoutes
})

export default router
