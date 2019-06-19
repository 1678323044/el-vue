<template>
  <div>
    <head-title :title="address.title">
      <div class="mint-header-button is-left" slot="left">
        <a href="#/" class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
            <label class="mint-button-text"></label>
          </button>
        </a>
      </div>
      <div class="mint-header-button is-right" slot="right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon"><i class="mintui mintui-more"></i></span>
          <label class="mint-button-text"></label>
        </button>
      </div>
    </head-title>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">Home</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
        <div class="mui-media-body">Email</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">Chat</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">location</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">Phone</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-gear"></span>
        <div class="mui-media-body">Setting</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-more"></span>
        <div class="mui-media-body">more</div></a></li>
    </ul>
    <shop-list></shop-list>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import headTitle from '../../components/header/header'
  import shopList from '../../components/shopList/shopList'
  export default {
    created(){
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address'])
    },
    components: {
      headTitle,
      shopList
    }
  }
</script>

<style>
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    margin: 0 0 10px 0;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
  .mui-table-view .mui-media-object{
    height: 65px;
    max-width: 65px;
  }
  .mui-table-view-cell p{
    font-size: 12px;
  }
  .price{
    font-size: 12px;
    color: #999999;
    margin: 2px 0 0 0;
  }
  .price .strong{
    font-size: 16px;
    color: orange;
    font-weight: bold;
  }
  .price .line-right{
    float: right;
  }
</style>
