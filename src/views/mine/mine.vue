<template>
  <div>
    <head-title title="我的">

    </head-title>

    <ul class="mui-table-view mui-table-view-chevron top-mine">
      <li class="mui-table-view-cell mui-media">
        <router-link class="mui-navigate-right" to="/login">
          <img class="mui-media-object mui-pull-left head-img" id="head-img" src="./images/logo.png">
          <div class="mui-media-body">
            {{user.username || '登录/注册'}}
            <p class="mui-ellipsis">暂未绑定手机号</p>
          </div>
        </router-link>
      </li>
    </ul>
    <nav class="mui-bar mui-bar-tab ">
      <a class="mui-tab-item" href="#">
        <span><i>0.00</i>元</span>
        我的余额
      </a>
      <a class="mui-tab-item" href="#">
        <span><i>0</i>个</span>
        我的优惠
      </a>
      <a class="mui-tab-item" href="#">
        <span><i>0</i>个</span>
        我的积分
      </a>
    </nav>
    <ul class="mui-table-view mui-table-view-chevron list-menu">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont icondingdan"></i>
          我的订单
        </a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont iconjifenshangcheng"></i>
          积分商城
        </a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont iconhuiyuanqia"></i>
          会员卡
        </a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron list-menu">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">
          <i class="iconfont iconfuwuzhongxin"></i>
          服务中心
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import util from '../../util'
  import headTitle from '../../components/header/header'
  export default {
    components: {
      headTitle
    },
    computed: {
      ...mapState(['user'])
    },
    created(){
      const user = util.readStorage()
      this.$store.dispatch('recordUser',user)
    },
    watch: {
      user: {
        deep: true,
        handler: util.saveStorage
      }
    }
  }
</script>

<style scoped>
  .top-mine{
    background: #2b9dfa;
    padding: 20px 0;
  }
  .mui-table-view .mui-media-object{
    height: 55px;
    max-width: 55px;
    border-radius: 50%;
    border: solid 1px #eeeeee;
  }
  .mui-table-view .mui-media-body{
    color: #ffffff;
    font-size: 24px;
  }
  .mui-ellipsis{
    color: #ffffff;
    margin: 10px 0 0 0;
  }
  .mui-bar{
    position: static;
    box-shadow: 0 0 1px #cccccc;
    font-size: 12px;
    padding: 7px 0;
    background-color: #ffffff;
  }
  .mui-tab-item{
    position: relative;
  }
  .mui-tab-item:before{
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    width: 1px;
    height: 30px;
    background-color: #cccccc;
  }
  .mui-bar span{
    display: block;
  }
  .mui-bar span i{
    font-size: 20px;
    color: orange;
  }
  .list-menu{
    margin: 10px 0 0 0;
  }
  .iconfont{
    font-size: 22px;
    color: orange;
    vertical-align: middle;
  }
</style>
