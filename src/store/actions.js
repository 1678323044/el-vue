/* 间接更新state属性 */

import {
  RECEIVE_LOGIN,
  RECEIVE_RAWDATA
} from './mutations-types'
import {
  reqRawdata
} from  '../api/index'


export default {
  //同步记录用户信息
  recordLogin({commit},result){
    commit(RECEIVE_LOGIN,{result})
  },

  //异步读取用户信息
  readUser({commit},result){
    commit(RECEIVE_LOGIN,{result})
  },

  //异步获取原始数据
  async getRawdata({commit},data){
    let result = await reqRawdata(data)
    if (result.errcode === 0){
      commit(RECEIVE_RAWDATA,{result})
    }
  }
}

