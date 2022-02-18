// import { ElButton } from 'element-plus'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import locale from 'element-plus/lib/locale'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default app => {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
