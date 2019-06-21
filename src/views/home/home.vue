<template>
  <section class="home">
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
    <neck-nav></neck-nav>
    <shop-list></shop-list>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import headTitle from '../../components/header/header'
  import shopList from '../../components/shopList/shopList'
  import neckNav from '../../components/neckNav/neckNav'
  export default {
    created(){
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address'])
    },
    components: {
      headTitle,
      shopList,
      neckNav
    }
  }
</script>

<style>
  .home{
    padding-bottom: 48px;
  }
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
