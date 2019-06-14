/* 间接更新state对象 */
import {RECEIVE_ADDRESS} from './mutations-types'

import {reqAddress} from '../api/index'

export default {
  async getAddress({commit,state}){
    let geohash = {latitude:state.latitude,longitude:state.longitude}
    let result = await reqAddress(geohash)
    if (result.code === 0){
      let address = result.address
      commit(RECEIVE_ADDRESS,{address})
    }
  }
}
