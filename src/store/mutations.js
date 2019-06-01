/* 直接更新state对象 */
import {
  RECEIVE_LOGIN
} from './mutations-types'

export default {
  [RECEIVE_LOGIN](state,{result}){
    state.userid = result.userid
    state.accesstoken = result.accesstoken
    state.username = result.username
  }
}
