import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/utils'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.response.use(
  res => {
    const { code, message, data } = res.data
    if (code === 200) {
      return data
    } else {
      ElMessage.error(message)
      Promise.reject(new Error(message))
    }
  },
  err => {
    // 处理 token 超时问题
    if (err.response && err.response.data && err.response.data.code === 401) {
      // token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(err.message) // 提示错误信息
    return Promise.reject(err)
  }
)
service.interceptors.request.use(
  req => {
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      if (isCheckTimeout()) {
        // 登出操作
        store.dispatch('sys/logout')
        return Promise.reject(new Error('token 失效'))
      }
      // 如果token存在 注入token
      req.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return req // 必须返回配置
  },
  err => {
    return Promise.reject(err)
  }
)
export default service
