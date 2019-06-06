import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '../views/login/login'
import rawdata from '../views/rawdata/rawdata'
import receivers from '../views/receivers/receivers'
import companies from '../views/companies/companies'
import addCompany from '../views/addCompany/addCompany'
import addReceivers from '../views/addReceivers/addReceivers'

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
      path: '/receivers',
      component: receivers,
      meta: {
        showComponent:true
      }
    },
    {
      path: '/addReceivers',
      component: addReceivers,
      meta: {
        showComponent: true
      }
    },
    {
      path: '/companies',
      component: companies,
      meta: {
        showComponent: true
      }
    },
    {
      path: '/addCompany',
      component: addCompany,
      meta: {
        showComponent: true
      }
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
