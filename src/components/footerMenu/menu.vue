<template>
  <mt-tabbar>
    <mt-tab-item id="tab1" v-bind:class="{ 'is-selected': '/home' === $route.path }" v-on:click.native="goto('/home')">
      <i class="iconfont iconshouye1-copy"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2" v-bind:class="{ 'is-selected': '/order' === $route.path }" v-on:click.native="goto('/order')">
      <i class="iconfont icondingdan2"></i>
      订单
    </mt-tab-item>
    <mt-tab-item id="tab3" v-bind:class="{ 'is-selected': '/search' === $route.path }" v-on:click.native="goto('/search')">
      <i class="iconfont iconicon_find"></i>
      发现
    </mt-tab-item>
    <mt-tab-item id="tab4" v-bind:class="{ 'is-selected': '/mine' === $route.path }" v-on:click.native="goto('/mine')">
      <i class="iconfont iconwode"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped>
  .iconfont{
    display: block;
    font-size: 19px;
    margin: 0 0 3px 0;
  }
  .mint-tab-item{
    color: #999999;
  }
  .mint-tabbar{
    box-shadow: 6px 0px 3px #aaaaaa;
  }
  .mint-tabbar{
    position: fixed;
  }
</style>
