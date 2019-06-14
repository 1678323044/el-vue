/* 入口文件 */
import Vue from 'vue'
import App from './App'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引入mui-ui
import './lib/mui/css/mui.min.css'

import router from './router/index'
import store from './store/index'

new Vue({
  el: '#app',
  render: h => h(App),
  MintUI,
  router,
  store
})
