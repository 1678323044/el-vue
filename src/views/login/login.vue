<template>
  <div class="login">
    <header><i class="mui-icon mui-icon-closeempty"></i></header>
    <main>
      <div class="top">ELM外卖</div>
      <div class="bottom">
        <div class="tab">
          <ul>
            <li :class="{'active': select}" @click="select = true">密码登录</li>
            <li :class="{'active': !select}" @click="select = false">短信登录</li>
          </ul>
        </div>
        <div class="form">
          <div>
            <input type="text" v-model="username" placeholder="请输入用户名" class="mui-input-password" data-input-password="3">
            <input type="password" v-model="password" placeholder="请输入密码" class="mui-input-password" data-input-password="3">
          </div>
          <p>温馨提示：未注册硅谷外卖账号的手机号，登录时将自动注册，且代表已经同意《用户服务协议》</p> <br>
          <button type="button" @click="submitForm" class="mui-btn mui-btn-primary mui-btn-block">登录</button> <br>
          <p class="about">关于我们</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import '../../../static/css/reset.css'
  import {reqLogin} from "../../api";

  export default {
    data(){
      return{
        select: true,
        username: '',
        password: ''
      }
    },
    methods: {
      async submitForm(){
        //验证表单数据
        if (!this.username || !this.password) {
          alert("请输入用户名或密码")
          return
        }
        //发送ajax请求
        const data = {username: this.username,password: this.password}
        const result = await reqLogin(data)
        if (result.code === 0){
          //将用户信息保存到vuex
          const user = result.user
          console.log(user)
          this.$store.dispatch('recordUser',user)
          //跳转到首页
          this.$router.replace('/mine')
        }else {
          //显示错误信息
          alert(result.msg)
        }
      }
    }
  }
</script>

<style>
  .login{
    height: 100%;
    background-color: #ffffff;
  }
  .mui-icon-closeempty{
    font-size: 48px;

  }
  main .top{
    text-align: center;
    font-size: 48px;
    line-height: 200px;
    color: #007aff;
  }
  .form{
    width: 90%;
    margin: 0 auto;
  }
  .tab ul{
    width: 50%;
    margin: 0 auto 20px;
    overflow: hidden;
  }
  .tab li{
    float: left;
    margin: 0 17px;
    line-height: 40px;
  }
  .mui-btn-block{
    padding: 10px 0;
  }
  .about{
    text-align: center;
  }
  .active{
    color: #007aff;
    position: relative;
  }
  .active:before{
    content: '';
    position: absolute;
    width: 60px;
    height: 1px;
    background: #007aff;
    bottom: 0px;
  }
</style>
