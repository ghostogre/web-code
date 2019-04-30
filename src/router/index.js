import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('../pages/Index.vue')
const Task = () => import('../pages/Task.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
