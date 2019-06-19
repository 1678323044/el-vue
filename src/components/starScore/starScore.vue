<template>
  <!-- iconxingxing iconbankexing iconxingxing1 -->
  <p class="score">
    <span class="iconfont" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </p>
</template>

<script>
  export default {
    props: ['score'],
    computed: {
      starClasses(){
        const {score} = this
        const scs = []
        //向scs中添加n个iconxingxing
        const scsInt = Math.floor(score)  //拿到整数部分
        for (let i = 0;i < scsInt;i ++){
          scs.push("iconxingxing")
        }
        //向scs中添加0或1个iconbankexing
        if (score*10 - scsInt*10 >= 5){
          scs.push("iconbankexing")
        }
        //向scs中添加0或n个iconxingxing1
        while (scs.length < 5){
          scs.push("iconxingxing1")
        }
        return scs
      }
    }
  }
</script>

<style>
  .score span{
    margin: 0 -2px;
    color: orange;
  }
  .score .iconbankexing,.score .iconxingxing1{
    font-size: 15px;
  }
</style>
