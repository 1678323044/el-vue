/*
 * 包含n个接口请求函数的模块
*/

import ajax from "./ajax"

const BASE_URL = 'http://www.smartu365.com:10000'
const SMART_URL = 'https://www.smartu365.com'
const ANAL_URL = 'http://smartu365.com:9801'
//const LOCAL_URL = 'http://127.0.0.1:8000'

//登录模块
export const reqLogin = (userInfo) => ajax(`${SMART_URL}/ac/login`,userInfo)

//原始数据模块
export const reqRawdata = (data) => ajax(`${BASE_URL}/rawdatas`,data)

//原始解析数据模块
export const reqAnalysis = (data) => ajax(`${ANAL_URL}/parse`,data)

//公司列表模块
export const reqCompanies = () => ajax(`${SMART_URL}/api/company/list`)
//export const reqCompanies = () => ajax(`${LOCAL_URL}/companies`)

//添加公司模块
export const reqAddCompany = (data) => ajax(`${SMART_URL}/api/company/add`,data)
//export const reqAddCompany = (data) => ajax(`${LOCAL_URL}/addCompany`,data)

//编辑公司模块
export const reqEditCompany = (data) => ajax(`${SMART_URL}/api/company/modify`,data)
//export const reqEditCompany = (data) => ajax(`${LOCAL_URL}/editCompany`,data)

//批量创建接收器模块
export const reqCreateReceivers = (data) => ajax(`${SMART_URL}/api/receiver/batchcreate`,data)
