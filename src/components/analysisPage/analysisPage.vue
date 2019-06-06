<template>
  <div>
    <div class="bg"></div>
    <div class="popup">
      <textarea>{{analysisInfo}}</textarea>
      <el-button type="primary" @click="leave">取消</el-button>
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
    padding: 10px;
    box-sizing: border-box;
  }
  .popup textarea{
    width: 100%;
    height: 90%;
  }
</style>


