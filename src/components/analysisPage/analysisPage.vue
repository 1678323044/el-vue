<template>
  <div>
    <div class="bg"></div>
    <div class="popup">
      <div class="popup-top">
        <p>解析数据</p>
        <span @click="leave"><i class="el-icon-close"></i></span>
      </div>
      <textarea>{{analysisInfo}}</textarea>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['analysisInfo'])
    },
    methods: {
      leave(){
        PubSub.publish('cancel')
      }
    }
  }
</script>

<style scoped>
  .bg{
    width: 100%;
    height: 100%;
    background-color: #333333;
    opacity: 0.6;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .popup{
    width: 800px;
    height: 484px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 20%;
    margin: 0 0 0 -400px;
    z-index: 99999;
    box-sizing: border-box;
  }
  .popup textarea{
    width: 100%;
    height: 90%;
    padding: 20px;
    box-sizing: border-box;
  }
  .popup .popup-top{
    line-height: 55px;
    background-color: #324157;
    color: #ffffff;
    overflow: hidden;
  }
  .popup .popup-top p{
    float: left;
    text-indent: 50px;
  }
  .popup .popup-top span{
    float: right;
    text-align: center;
    font-size: 26px;
    padding: 0 20px 0;
    cursor: pointer;
  }
</style>


