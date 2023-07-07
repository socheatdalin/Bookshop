import { createRouter, createWebHistory } from 'vue-router'
import authApi from '@/libs/apis/auth'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/login',
      name: 'auth/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component:() => import('../views/Bookdetail.vue')

    },
    {
      path: '/product',
      name: 'product',
      component:() => import('../views/ProductView.vue')
    } ,
    ,
    {
      path: '/about',
      name: 'about',
      component:() => import('../views/AboutView.vue')
    } ,
    {
      path: '/register',
      name: 'auth/register',
      component:() => import('../views/RegisterView.vue')
    } ,
    {
      path: '/userhome',
      name: 'userhomepage',
      component:() => import('../views/HomeView2.vue')
    } ,
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const me = await authApi.getMe();
//   const isAuthenticated = !!me
//   if (to.name.includes('home') && !isAuthenticated) next({ name: 'auth/login' })
//   if (to.name.includes('auth') && isAuthenticated) next({ name: 'home' })
//   else next()
// })

export default router
