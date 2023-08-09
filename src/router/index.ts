import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        // 始终滚动到顶部
        return { 
            left: 0,    
            top: 0 
        }
    },
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router