import Vue from 'vue'
import moment from 'moment'

Vue.filter('vehicleType',function (type) {
  switch (type) {
    case 1:
      return type = "小车"
    case 2:
      return type = "大车"
    case 3:
      return type = "挂车"
    case 4:
      return type = "车头"
    case 5:
      return type = "整车"
  }
})

Vue.filter('alterStatus',function (status) {
  switch (status) {
    case 0:
      return status = "未激活"
    case 1:
      return status = "在线"
    case -1:
      return status = "离线"
    case -2:
      return status = "作废"
  }
})

Vue.filter('dateFormat',function (lt) {
  return moment.unix(lt).format('YYYY-MM-DD HH:mm:ss')
})

Vue.filter('filterMileage',function (mileage) {
  return mileage.toFixed(2)
})

Vue.filter('filterStat',function (stat) {
  switch (stat) {
    case 0:
      return stat = "新数据"
    case 1:
      return stat = "已读取"
    case 2:
      return stat = "处理完成"
    case 3:
      return stat = "异常"
  }
})
