// 专门处理权限路由的模块
import { publicRoutes, privateRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    // 路由表：初始拥有静态路由权限
    routes: publicRoutes,
    isInitRoutes: false
  },
  mutations: {
    /**
     * 增加路由
     */
    setRoutes(state, newRoutes) {
      console.log(publicRoutes, newRoutes)
      publicRoutes
      // 永远在静态路由的基础上增加新路由
      state.routes = [...publicRoutes, ...newRoutes]
    },
    updateInitRoutesFlg(state, payload) {
      state.isInitRoutes = payload
    }
  },
  actions: {
    /**
     * 根据权限筛选路由
     */
    filterRoutes(context, menus) {
      debugger
      console.log(menus)
      const routes = []
      // 路由权限匹配//TODO
      // menus.forEach(key => {
      //   // 权限名 与 路由的 name 匹配
      //   routes.push(...privateRoutes.filter(item => item.name === key))
      // })
      privateRoutes.forEach(v => {
        routes.push(v)
      })

      // 最后添加 不匹配路由进入 404
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      context.commit('setRoutes', routes)
      return routes
    }
  }
}
