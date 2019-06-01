import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '../views/login/login'
import rawdata from '../views/rawdata/rawdata'
import library from '../views/library/library'

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/rawdata',
      component: rawdata,
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
