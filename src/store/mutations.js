/* 直接更新state对象 */
import {RECEIVE_ADDRESS} from './mutations-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  }
}
