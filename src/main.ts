import { createApp } from 'vue'
import router from './router'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from './App.vue'
import ElementPlus from 'element-plus'
// ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
// app.use(ElementPlus)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
