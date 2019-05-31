import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '../views/login/login'
import log from '../views/log/log'
import library from '../views/library/library'

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/log',
      component: log,
      meta: {
        showComponent: true
      }
    },
    {
      path: '/library',
      component: library,
      meta: {
        showComponent:true
      }
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
