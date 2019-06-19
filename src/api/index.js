/* 包含n个接口请求函数的模块
 * 返回值：promise对象
*/
import ajax from './ajax'

//const BASE_URL = 'http://127.0.0.1:8000'
const API_URL = '/api'

//接收地址信息模块
export const reqAddress = (geohash) => ajax(`${API_URL}/position`,geohash)

//密码登录模块
export const reqLogin = (data) => ajax(`${API_URL}/login`,data,'POST')

//接收商铺列表模块
export const reqShops = () => ajax(`${API_URL}/shops`)
