import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
const httpInstance = axios.create({
    baseURL: '/api',
    timeout: 5000 // 超时的时间的设置，超出五秒请求就是失败
})

// 对于axios函数库进行二次封装？
// 工作的时候是否axios进行二次封装？二次封装的目的是什么？
// 目的：1、利用axios请求、响应拦截器功能
// 目的：2、请求拦截器，一般可以在请求头中携带公共的参数：token
// 目的：3、响应拦截器，可以简化服务器返回的数据，处理http网络错误

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config;
}, e => Promise.reject(e))
  
// axios响应式拦截器
httpInstance.interceptors.response.use(res => {
    return res.data;
}, e => {
    // 处理http网络错误
    let status = e.response.status;
    switch (status) {
        case 404:
            // 错误提示信息
            ElMessage({
                type: 'error',
                message: '请求失败路径出现问题'
            })
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '服务器挂了'
            })
            break;
    }
    return Promise.reject(e)
})

// 拦截器
export default httpInstance