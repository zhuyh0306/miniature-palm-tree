import { createStore } from 'vuex'
import sys from './modules/sys-module'
import app from './modules/app-module.js'
import permission from './modules/permission'
import thema from './modules/theme'
import user from './modules/user'
import getters from './getter'
export default createStore({
  modules: { sys, app, permission, thema, user },
  getters
})
