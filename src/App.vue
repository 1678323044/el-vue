<template>
  <div id="app">
    <head-menu v-show="$route.meta.showComponent"></head-menu>
    <el-container>
      <side-menu v-show="$route.meta.showComponent"></side-menu>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
  import headMenu from './components/headMenu/headMenu'
  import sideMenu from './components/sideMenu/sideMenu'
  export default {
    components: {
      headMenu,
      sideMenu
    }
  }
</script>

<style>
  .el-container{
    height: 100%;
  }
</style>
