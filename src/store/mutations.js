/* 直接更新state对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RECEIVE_SHOPS
} from './mutations-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_USER](state,{user}){
    state.user = user
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  }
}
