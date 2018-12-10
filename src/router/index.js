import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../pages/Index.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      component: Index
    }
  ]
})
