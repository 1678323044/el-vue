/* 包含n个接口请求函数的模块
 * 返回值：promise对象
*/
import ajax from './ajax'

const BASE_URL = 'http://127.0.0.1:8000'
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position`,geohash)
