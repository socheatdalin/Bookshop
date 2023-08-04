import { createRouter, createWebHistory } from 'vue-router'
import authApi from '../libs/apis/auth'
import HomeView from '../views/HomeView.vue'
import HomeView2 from '../views/HomeView2.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProductView from '../views/ProductView.vue'
import BookDetail from '../views/BookDetail.vue'
import CartView from '../views/CartView.vue'
import Category from '../views/Dashboard/pages/category.vue';
import Book from '../views/Dashboard/pages/book.vue';

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
                        path: '/about2',
                        name: 'about2',
                        component: () => import('../views/About2.vue')
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
                        path: '/detail2/:Bid',
                        name: 'detail2',
                        component: () => import('../views/Detail2.vue')
                },
                {
                        // path: '/cart/:Cid',
                        path: '/cart',
                        name: 'cart',
                        component: CartView
                },
                {
                        path: '/product2',
                        name: 'product2',
                        component:  () => import('../views/ProductView2.vue')
                },
                {
                        // path: '/payment/:Pid',
                        path: '/payment',
                        name: 'payment',
                        meta: {
                                requiresAuth: true
                              },
                        component:  () => import('../views/PaymentView.vue')
                },
                {
                        // path: '/payment/:Pid',
                        path: '/paymentStatus',
                        name: 'paymentstatus',
                        component:  () => import('../views/successfullypage.vue')
                },
                {
                        // path: '/payment/:Pid',
                        path: '/orderHistory',
                        name: 'orderHistory',
                        component:  () => import('../views/orderHistory.vue')
                },
                {
                        path: '/dashboard',
                        name: 'dashboard',
                        component:  () => import('../views/Dashboard/DashboardView.vue'),
                        children:[
                                {
                                        path: 'book',
                                        name:'dashboard/book',
                                        component:Book,
                                },
                                {
                                        path: 'category',
                                        name:'dashboard/category',
                                        component: Category
                                }
                        ]
                },
                
        ]
})
// router.beforeEach(async (to, from, next) => {
//         const me = await authApi.getMe();
//         const isAuthenticated = !!me
//         if (to.name.includes('payment2') && !isAuthenticated) next({ name: 'auth/login' })
//         if (to.name.includes('auth') && isAuthenticated) next({ name: 'payment2' })
//         else next()
//       })

export default router
