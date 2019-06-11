/* 间接更新state属性 */

import {
  RECEIVE_LOGIN,
  RECEIVE_RAWDATA,
  RECEIVE_COMPANIES,
  RECEIVE_ANALYSIS,
  RECEIVE_CREATE_RECEIVERS,
  RECEIVE_RECEIVES
} from './mutations-types'
import {
  reqRawdata,
  reqCompanies,
  reqAnalysis,
  reqReceivers
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
  },

  //异步获取原始的解析数据
  async getAnalysis({commit},data){
    let result = await reqAnalysis(data)
    commit(RECEIVE_ANALYSIS,{result})
  },

  //同步获取批量创建接收器数据
  getCreateReceivers({commit},result){
    commit(RECEIVE_CREATE_RECEIVERS,{result})
  },

  //异步获取接收器列表数据
  async getReceivers({commit},data){
    const result = await reqReceivers(data)
    if (result.errcode === 0){
      commit(RECEIVE_RECEIVES,{result})
    }
  }
}

