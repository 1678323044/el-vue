/* 封装ajax请求函数 */

import axios from 'axios'
import qs from 'qs'

export default function ajax(url,data={},type='POST') {
  return new Promise(function (resolve,reject) {
    let promise
    if (type === 'POST'){
      if (url.substr(-5) === 'login'){
        promise = axios.post(url,qs.stringify(data))
      }else{
        const param  = '?userid='+'xxx'+'&accesstoken='+'xxx'
        const urlParam = url + param
        promise = axios.post(urlParam,qs.stringify(data))
      }
    }
    promise.then(function (res) {
      resolve(res.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
