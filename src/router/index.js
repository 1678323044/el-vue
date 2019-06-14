import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../views/home/home'
import mine from '../views/mine/mine'
import order from '../views/order/order'
import search from '../views/search/search'
import login from '../views/login/login'

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/mine',
      component: mine,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
