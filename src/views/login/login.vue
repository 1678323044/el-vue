<template>
  <div class="login-page">
    <div class="login-bgImg"></div>
    <div class="login-box">
      <div class="login-left">
        <div class="login-title">
          <img src="./images/logo.png" alt="">
          <h1>智能轮胎管理系统</h1>
        </div>
      </div>
      <div class="login-right">
        <div class="login-form">
          <el-input
            v-model="username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user">
          </el-input>
          <el-input
            v-model="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-unlock">
          </el-input>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {reqLogin} from '../../api/index'
  export default {
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods: {
      async handleLogin(){
        //表单验证
        if (!this.username || !this.password){
          alert("用户名或密码不能为空")
          return
        }
        //发送ajax请求
        const userInfo = {user: this.username,pass: this.password}
        const result = await reqLogin(userInfo)
        if (result.errcode === 0){
          //将用户名和用户令牌保存到全局变量
          this.globalToken.setUseridToken(result.userid)
          this.globalToken.setAccessToken(result.accesstoken)

          this.$store.dispatch('recordLogin',result)
          this.$router.replace('/rawdata')
        }else {
          alert(result.msg)
        }
      }
    }
  }
</script>

<style>
  .login-page{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .login-page .login-bgImg{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("./images/400730822.bbf5f97.png") no-repeat 50%;
    background-size: cover;
    z-index: 0;
  }
  .login-page .login-box{
    width: 900px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 5px;
    z-index: 10;
    position: absolute;
    left: 50%;
    top: 20%;
    margin: 0 0 0 -450px;
    box-shadow: 0 0 5px #999999;
    overflow: hidden;
  }
  .login-page .login-box .login-left{
    width: 60%;
    height: 100%;
    float: left;
    background-color: cadetblue;
    text-align: center;
    color: #ffffff;
  }
  .login-page .login-box .login-left img{
    width: 200px;
    margin: 80px 0 0 0;
  }
  .login-page .login-box .login-right{
    width: 40%;
    height: 100%;
    float: right;
    padding: 20px;
    box-sizing: border-box;
  }
  .login-page .login-box .login-right .login-form{
    margin: 50px 0 0 0;
  }
  .login-page .login-box .login-right .login-form .el-input{
    margin: 0 0 20px 0;
  }
  .login-page .login-box .login-right .login-form i{
    font-size: 18px;
  }
  .login-page .login-box .login-right .login-form button{
    width: 100%;
  }
</style>
