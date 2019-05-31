<template>
  <el-aside>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#1f2f3e"
        text-color="#fff"
        active-text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>设备管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="goto('/library')" :class="{'is-current':'/library' ===$route.path}">设备入库</el-menu-item>
            <el-menu-item index="1-1" @click="goto('/log')" :class="{'is-current':'/log'===$route.path}">设备日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-aside>
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
  .el-col,.el-col ul{
    height: 100%;
  }
  .is-current{
    background-color: #999999!important;
  }
</style>
