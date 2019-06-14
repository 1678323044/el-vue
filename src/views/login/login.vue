<template>
  <div class="login">
    <header>
      <span><a class="mui-action-back mui-icon mui-icon-closeempty mui-pull-left" v-on:click="$router.back()"></a></span>
      <h1>ELM外卖</h1>
    </header>
    <main>
      <ul>
        <li>密码登录</li>
        <li>短信登录</li>
      </ul>
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label><i class="mui-icon mui-icon-person"></i></label>
          <input type="text" class="mui-input-clear" placeholder="请输入用户名">
        </div>
        <div class="mui-input-row">
          <label><i class="mui-icon mui-icon-locked"></i></label>
          <input type="password" class="mui-input-password" placeholder="请输入密码">
        </div>
        <div class="mui-button-row">
          <button type="button" class="mui-btn mui-btn-primary" >登录</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
  import '../../../static/css/reset.css'
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  header{
    height: 250px;
    text-align: center;
    background-color: #39aabc;
  }
  header span{
    display: block;
    height: 46px;
  }
  header .mui-icon{
    font-size: 46px;
    color: #ffffff;
  }
  header h1{
    margin-top: 40px;
    color: #ffffff;
    font-weight: normal;
    letter-spacing: 5px;
  }
  main{
    width: 290px;
    height: 265px;
    background: #ffffff;
    box-shadow: 0 0 5px #999999;
    margin: -65px auto 0;
    border-radius: 20px;
  }
  main ul{
    overflow: hidden;
  }
  main li{
    float: left;
    line-height: 50px;
    width: 50%;
    text-align: center;
  }
  main li:nth-child(1){
    position: relative;
  }
  main li:nth-child(1):before{
    content: '';
    background-color: #cccccc;
    width: 1px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 10px;
  }
  main form{
    padding: 30px 0 0 0;
  }
  .mui-button-row{
    margin: 10px 0 0 0;
  }
  .mui-btn-primary{
    width: 90%;
    line-height: 26px;
  }
  .mui-input-row{
    margin: 0 0 20px 0;
  }
  .mui-input-row label{
    width: 20%;
  }
  .mui-input-row label~input{
    width: 80%;
    font-size: 15px;
  }
</style>
