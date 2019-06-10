/* 直接更新state对象 */
import {
  RECEIVE_LOGIN,
  RECEIVE_RAWDATA,
  RECEIVE_COMPANIES,
  RECEIVE_ANALYSIS,
  RECEIVE_CREATE_RECEIVERS
} from './mutations-types'

export default {
  //更新登录
  [RECEIVE_LOGIN](state,{result}){
    state.userInfo = result
  },
  //更新原始数据
  [RECEIVE_RAWDATA](state,{result}){
    state.rawdataInfo = result
  },
  //更新公司列表数据
  [RECEIVE_COMPANIES](state,{result}){
    state.companiesInfo = result
  },
  //更新原始解析数据
  [RECEIVE_ANALYSIS](state,{result}){
    state.analysisInfo = result
  },
  //更新批量创建接收器的返回数据
  [RECEIVE_CREATE_RECEIVERS](state,{result}){
    state.createReceivers = result
  }
}
