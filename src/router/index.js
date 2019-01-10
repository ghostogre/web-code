import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../pages/Index.vue')
const Home = () => import('../pages/Home/Home.vue')
const Type = () => import('../pages/Type/Type.vue')
const Discover = () => import('../pages/Discover/Discover.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Mine = () => import('../pages/Mine/Mine.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'type',
          name: 'type',
          component: Type
        },
        {
          path: '/discover',
          name: 'discover',
          component: Discover
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '*',
      component: Index
    }
  ]
})
