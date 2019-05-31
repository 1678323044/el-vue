/* 入口文件 */
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import qs from 'qs'

new Vue({
  el: '#app',
  render: h => h(App),
  ElementUI,
  qs
})
