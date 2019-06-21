<template>
  <section>
    <div class="swiper-container" v-if="category.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="categoryGoods in categoryGoodsArr">
          <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="categoryGood in categoryGoods">
              <a href="#">
                <img :src="`@/../static/image/classIcons/${categoryGood.icon_url}.png`" alt="">
                <div class="mui-media-body">{{categoryGood.title}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <img class="bgImg" src="../../common/images/icons-bg.svg" v-else>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed: {
      ...mapState(["category"]),

      categoryGoodsArr(){
        const category = this.category
        //准备一个空的二维数组
        const arr = []
        //准备一个空的数组
        let minArr = []
        category.forEach(c => {
          //如果minArr放满8个 则准备新的minArr
          if (minArr.length === 8){
            minArr = []
          }
          if (minArr.length === 0){
            arr.push(minArr)
          }
          minArr.push(c)
        })
        return arr
      }
    },
    mounted() {
      this.$store.dispatch("getCategory")
    },
    watch: {
      category(){
        //this.$nextTick(callback) 页面更新 执行该回调函数
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true,  //循环轮播
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style>
  section .bgImg{
    width: 414px;
    height: 168px;
    background-color: #ffffff;
  }
  .swiper-slide li img{
    width: 60px;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    margin-top: 0;
  }
</style>
