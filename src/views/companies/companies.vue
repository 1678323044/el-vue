<template>
  <el-main>
    <div class="main-search">
      <el-input placeholder="请输入公司名称"></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="main-table">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop=""
          label="序号">
        </el-table-column>
        <el-table-column
          prop=""
          label="公司名称">
        </el-table-column>
        <el-table-column
          prop=""
          label="管理人">
        </el-table-column>
        <el-table-column
          prop=""
          label="手机号">
        </el-table-column>
        <el-table-column
          prop=""
          label="邮箱">
        </el-table-column>
      </el-table>
    </div>
  </el-main>
</template>

<script>
  import '../../common/css/comm.css'
  export default {
    data(){
      return{
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    created() {
      this.$store.dispatch('getCompanies')
    }
  }
</script>
