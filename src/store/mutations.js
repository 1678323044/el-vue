/* 直接更新state对象 */
import {
  RECEIVE_LOGIN,
  RECEIVE_RAWDATA
} from './mutations-types'

export default {
  //更新登录
  [RECEIVE_LOGIN](state,{result}){
    state.userInfo = result
  },
  //更新原始数据
  [RECEIVE_RAWDATA](state,{result}){
    state.rawdataInfo = result
  }
}
