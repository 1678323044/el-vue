/* 封装localStorage存储模块 */
export default {
  saveStorage(newValue){
    window.localStorage.setItem('el-user',JSON.stringify(newValue))
  },
  readStorage(){
    return JSON.parse(window.localStorage.getItem('el-user') || '[]')
  }
}
