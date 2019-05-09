import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/page/Dashboard'
import Home from '@/components/common/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/dashboard'
    },
      {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
      },
      {
          path: '/home',
          name: 'Home',
          component: Home
      }
  ]
})
