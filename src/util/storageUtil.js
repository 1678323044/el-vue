/* 使用localStorage存储数据的工具模块 */
const NEWKEY = 'newKey'

export default {
  saveStorage(newValue){
    window.localStorage.setItem(NEWKEY,JSON.stringify(newValue))
  },
  readStorage(){
    return JSON.parse(window.localStorage.getItem(NEWKEY) || '[]')
  }
}
