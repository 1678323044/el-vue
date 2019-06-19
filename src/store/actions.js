/* 间接更新state对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RECEIVE_SHOPS,
  RECEIVE_SEARCH_SHOPS
} from './mutations-types'

import {
  reqAddress,
  reqShops,
  reqSearchShops
} from '../api/index'

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
  },
  //获取商品列表
  async getShops({commit}){
    let result = await reqShops()
    if (result.code === 0){
      let shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //获取搜索商品列表
  async getSearchShops({commit},val){
    const result = reqSearchShops(val)
    if (result.code === 0){
      let seaShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{seaShops})
    }
  }
}
