/* 封装ajax请求函数 */

import axios from 'axios'
import qs from 'qs'

export default function ajax(url,data={},type='POST') {
  return new Promise(function (resolve,reject) {
    let promise
    if (type === 'POST'){
      promise = axios.post(url,qs.stringify(data))
    }
    promise.then(function (res) {
      resolve(res.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
