/* 间接更新state属性 */

import {RECEIVE_LOGIN} from './mutations-types'
import {reqLogin} from  '../api/index'

export default {
  //同步记录用户信息
  async handleLogin({commit},data){
    let result = await reqLogin(data)
    if (result.errcode === 0){

      commit(RECEIVE_LOGIN,{result})
    }
  }
}

