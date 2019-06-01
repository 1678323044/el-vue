/* vuex核心管理对象 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getter from './getter'
import state from './state'

export default new Vuex.Store({
  actions,
  mutations,
  getter,
  state
})
