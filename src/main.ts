import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
import App from './App.vue'
import ElementPlus from 'element-plus'
// ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// 引入 pinia 仓库


const app = createApp(App)
const pinia = createPinia()
app.use(router)
// 安装pinia仓库
app.use(pinia)
// app.use(ElementPlus)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
