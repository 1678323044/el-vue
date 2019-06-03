<template>
  <el-aside>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#1f2f3e"
        text-color="#fff"
        active-text-color="#000">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-office-building"></i>
            <span>公司管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="goto('/companies')">公司列表</el-menu-item>
            <el-menu-item index="1-2" @click="goto('/addCompany')">添加公司</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-mobile"></i>
            <span>设备管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="goto('/receivers')">设备入库</el-menu-item>
            <el-menu-item index="2-2" @click="goto('/rawdata')">设备日志</el-menu-item>
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
  .is-active{
    background-color: #cccccc!important;
  }
  .el-submenu__title span{
    font-size: 16px;
  }
  .el-submenu__title i{
    color: #ffffff;
    font-size: 20px;
  }
  .el-icon-mobile{
    margin-right: 0;
  }
</style>
