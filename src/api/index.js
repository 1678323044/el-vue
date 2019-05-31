/*
 * 包含n个接口请求函数的模块
*/
import qs from "qs"
import axios from "axios"

const BASE_URL = '/api'
//登录模块
/*export function reqLogin(data) {
  let qsData = qs.stringify(data)
  axios.post(BASE_URL,qsData).then(res => {
    let result = res.data
    return result
  })
}*/

//原始数据模块
export function reqRawdata(param={}){
  let qsParam = qs.stringify(param)
  axios.post(`${BASE_URL}/rawdatas`,qsParam).then(res=> {
    let result = res.data
    return result
  })
}
