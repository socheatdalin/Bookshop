import { createRouter, createWebHistory } from 'vue-router'
import authApi from '../libs/apis/auth'
import HomeView from '../views/HomeView.vue'
import HomeView2 from '../views/HomeView2.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProductView from '../views/ProductView.vue'
import BookDetail from '../views/BookDetail.vue'
import CartView from '../views/CartView.vue'


const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
                {
                        path: '/',
                        name: 'home',
                        component: HomeView
                },
                {
                        path: '/home2',
                        name: 'home2',
                        component: HomeView2
                },
                {
                        path: '/about',
                        name: 'about',
                        component: () => import('../views/AboutView.vue')
                },
                {
                        path: '/login',
                        name: 'auth/login',
                        component: LoginView
                },
                {
                        path: '/register',
                        name: 'auth/register',
                        component: RegisterView
                },
                {
                        path: '/product',
                        name: 'product',
                        component: ProductView
                },
                {
                        path: '/detail/:Bid',
                        name: 'detail',
                        component: BookDetail
                },
                {
                        path: '/cart/:Cid',
                        name: 'cart',
                        component: CartView
                },
                {
                        path: '/product2',
                        name: 'product2',
                        component:  () => import('../views/ProductView2.vue')
                },
                {
                        path: '/payment/:Pid',
                        name: 'payment',
                        component:  () => import('../views/PaymentView.vue')
                },
                
        ]
})
// router.beforeEach(async (to, from, next) => {
//         const me = await authApi.getMe();
//         const isAuthenticated = !!me
//         if (to.name.includes('detail') && !isAuthenticated) next({ name: 'auth/login' })
//         if (to.name.includes('auth') && isAuthenticated) next({ name: 'home2' })
//         else next()
// })

export default router