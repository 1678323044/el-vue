/*
 * 包含n个接口请求函数的模块
*/

import ajax from "./ajax"


const BASE_URL = '/api'
const SMART_URL = 'https://www.smartu365.com'

//登录模块
export const reqLogin = (userInfo) => ajax(`${SMART_URL}/ac/login`,userInfo)

//原始数据模块
export const reqRawdata = (data) => ajax(`${BASE_URL}/rawdatas`,data)
