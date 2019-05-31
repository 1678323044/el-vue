<template>
  <div id="app">
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <el-input v-model="password" placeholder="请输入内容"></el-input>
    <el-button type="primary" v-on:click="handleLogin">主要按钮</el-button>
  </div>
</template>

<script>
  import qs from 'qs'
  import axios from 'axios'
  export default {
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin(){
        let userInfo = {user: this.username,pass: this.password}
        axios.post('/api/ac/login',qs.stringify(userInfo)).then(res =>{
          let result = res.data
          if (result.errcode == 0){
            alert("登录成功")
          }
        })
      }
    }
  }
</script>

<style>
  #app{
    width: 30%;
    margin: 40px auto 0;
  }
</style>
