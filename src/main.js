/* 入口函数 */
import Vue from 'vue'
import App from './App'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router/index'
import store from './store/index'
import qs from 'qs'



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  qs,
  store
})
