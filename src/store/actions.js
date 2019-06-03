/* 间接更新state属性 */

import {
  RECEIVE_LOGIN,
  RECEIVE_RAWDATA,
  RECEIVE_COMPANIES
} from './mutations-types'
import {
  reqRawdata,
  reqCompanies
} from  '../api/index'

export default {
  //记录用户信息
  recordLogin({commit},result){
    commit(RECEIVE_LOGIN,{result})
  },

  //读取用户信息
  readUser({commit},result){
    commit(RECEIVE_LOGIN,{result})
  },

  //异步获取原始数据
  async getRawdata({commit},data){
    let result = await reqRawdata(data)
    if (result.errcode === 0){
      commit(RECEIVE_RAWDATA,{result})
    }
  },

  //异步获取公司信息
  async getCompanies({commit}){
    let result = await reqCompanies()
    if (result.errcode === 0) {
      commit(RECEIVE_COMPANIES,{result})
    }
  }
}

