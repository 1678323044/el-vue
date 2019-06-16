/* 间接更新state对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_USER
} from './mutations-types'

import {reqAddress} from '../api/index'

export default {
  //异步获取地址信息
  async getAddress({commit,state}){
    let geohash = {latitude:state.latitude,longitude:state.longitude}
    let result = await reqAddress(geohash)
    if (result.code === 0){
      let address = result.address
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //同步记录用户信息
  recordUser({commit},user){
    commit(RECEIVE_USER,{user})
  }
}
