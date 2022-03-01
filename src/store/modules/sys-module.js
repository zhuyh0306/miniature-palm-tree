import { login, getUserInfo } from '@/service/sys.js'
import { getStorage, setStorage, removeAllStorage } from '@/utils/storage.js'
import constant from '@/constant'

import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getStorage(constant.TOKEN) || ''
  }),
  mutations: {
    setToken(state, payload) {
      state.token = payload
      console.log(constant.TOKEN)
      setStorage(constant.TOKEN, payload)
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        login(payload)
          .then(res => {
            console.log(res.toekn)
            context.commit('setToken', res.token)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
      removeAllStorage()
      router.push('/login')
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      context.commit('user/setUserInfo', res)
      return res
    }
  }
}
