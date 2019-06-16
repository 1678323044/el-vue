/* 直接更新state对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_USER
} from './mutations-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_USER](state,{user}){
    state.user = user
  }
}
