/* vuex的计算属性 */
export default {
  carType: state => {
    return state.receiversInfo.receivers.filter(receiver => receiver.type )
  }
}
