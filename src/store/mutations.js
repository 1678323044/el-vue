/* 直接更新state对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RECEIVE_SHOPS,
  RECEIVE_SEARCH_SHOPS,
  RECEIVE_CATEGORYS
} from './mutations-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_USER](state,{user}){
    state.user = user
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_SEARCH_SHOPS](state,{seaShops}){
    state.searchShops = seaShops
  },
  [RECEIVE_CATEGORYS](state,{categoryGoods}){
    state.category = categoryGoods
  }
}
