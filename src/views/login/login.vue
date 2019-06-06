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
            show-password
            prefix-icon="el-icon-unlock"
            @keyup.enter.native="handleLogin">
          </el-input>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
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
        password: '',
        checked: true
      }
    },
    created(){
      const account = JSON.parse(localStorage.getItem('account'))
      if (account){
        this.username = account.user
        this.password = account.pass
      }
    },
    methods: {
      async handleLogin(){
        //表单验证
        if (!this.username || !this.password){
          alert("请输入用户名或密码")
          return
        }
        //发送ajax请求
        const userInfo = {user: this.username,pass: this.password}
        const result = await reqLogin(userInfo)
        if (result.errcode !== 0){
          alert(result.msg)
        }else if (result.usertype !== 100) {
          alert("您的账号没有该权限")
        }else{
          //如果勾选'记住密码',将用户名和密码保存到localStorage
          if (this.checked){
            localStorage.setItem('account',JSON.stringify(userInfo))
          }else {
            localStorage.removeItem('account')
          }

          this.$store.dispatch('recordLogin',result)
          this.$router.replace('/companies')
        }
      }
    }
  }
</script>

<style scoped>
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
    margin: 80px 0 15px 0;
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
  .el-button{
    margin: 5px 0;
  }
</style>
