<template>
  <section>
    <head-title title="搜索"></head-title>
    <mt-search v-model="value" @blur.native.capture="searchShop"></mt-search>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(searchShop, index) in searchShops" :key="index">
        <a href="javascript:">
          <img class="mui-media-object mui-pull-left" :src="`@/../static/image/${searchShop.image_path}`">
          <div class="mui-media-body">
            <div class="top-title">
              <h6>{{searchShop.name}}</h6>
            </div>
            <div class="center-text" style="margin-top: 5px">
              <p class="mui-ellipsis">月售{{searchShop.recent_order_num}}单</p>
            </div>
          </div>
          <div class="price">
            <span>￥{{searchShop.float_minimum_order_amount}}元起送 / 配送费￥{{searchShop.float_delivery_fee}}</span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import headTitle from '../../components/header/header'
  export default {
    data(){
      return{
        value: ''
      }
    },
    computed: {
      ...mapState(["searchShops"])
    },
    components: {
      headTitle
    },
    methods: {
      searchShop(){
        if (!this.value.trim()){
          return
        }
        const val = {val: this.value}
        this.$store.dispatch('getSearchShops',val)
      }
    }
  }
</script>

<style>
  .mint-search input{
    margin-top: 14px;
    background-color: transparent!important;
  }
  .mint-search{
    height: auto;
  }
  .top-title h6{
    font-size: 16px;
    color: #333333;
  }
  .price span{
    font-size: 12px;
  }
</style>
