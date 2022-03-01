import NProgress from 'nprogress'
import router, { privateRoutes } from './index'
import store from '../store'
const whiteList = ['/login']

NProgress.configure({
  easing: 'ease',
  speed: 500,
  minimum: 0.3,
  trickleSpeed: 200,
  showSpinner: false
})
/**
 *路由前置守卫
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  //如果已登录，不能进入login
  if (!store.state.permission.isInitRoutes) {
    store.dispatch('permission/filterRoutes')
    store.commit('permission/updateInitRoutesFlg', true)
    privateRoutes.forEach(v => {
      router.addRoute(v)
    })
  }
  if (store.state.sys.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    //如果未登录，只允许进入login页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
