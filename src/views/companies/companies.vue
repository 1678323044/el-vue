<template>
  <el-main>
    <div class="main-search">
      <el-input placeholder="请输入公司名称"></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="main-table">
      <el-table
        :data="comp"
        style="width: 100%">
        <el-table-column
          prop="cid"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="公司名称">
        </el-table-column>
        <el-table-column
          prop="manager"
          label="管理人">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="email"
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
          cid: 1,
          name: '',
          manager: '',
          phone: '',
          email: ''
        }]
      }
    },
    created() {
      this.$store.dispatch('getCompanies')
    },
    computed: {
      comp(){
        return this.$store.state.companiesInfo.companies
      }
    }
  }
</script>
