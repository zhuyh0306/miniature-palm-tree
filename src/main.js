import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/normalize.scss'
import router from './router'
import './router/permission'
import store from './store'
import installElementPlus from './plugins/element'
import installSvg from './plugins/svg'
const app = createApp(App)
installElementPlus(app)
installSvg(app)
app.use(store).use(router).mount('#app')
