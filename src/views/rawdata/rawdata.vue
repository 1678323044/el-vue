<template>
  <el-main>
    <div class="main-search">
      <el-input v-model="imei" placeholder="请输入设备ID"></el-input>
      <el-select v-model="value" placeholder="请选择数据类型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="handleQuery">查询</el-button>
    </div>
    <div class="main-table">
      <el-table
        :data="showRawdata"
        style="width: 100%">
        <el-table-column
          prop="imei"
          label="设备号"
          width="160">
        </el-table-column>
        <el-table-column
          prop="dt"
          label="数据类别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="t"
          label="时间"
          width="140">
        </el-table-column>
        <el-table-column
          prop="rawdata"
          label="数据">
        </el-table-column>
        <el-table-column
          prop="stat"
          label="数据状态"
          width="100">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handlePaging"
        :current-page="currentPage"
        :total="totalCount">
      </el-pagination>
    </div>
  </el-main>
</template>

<script>
  import '../../common/css/comm.css'
  export default {
    data() {
      return {
        //当前页
        currentPage: 1,
        //总数据
        tableData: [],
        //总记录数
        totalCount: 0,
        value: '',
        imei: '',
        options: [
          {
            value: '',
            label: '数据类型'
          },
          {
            value: '0200',
            label: '0200'
          },
          {
            value: '0900',
            label: '0900'
          }
        ],
      }
    },
    computed: {
      showRawdata(){
        return this.$store.state.rawdataInfo.rawdatas
      }
    },
    created(){
      let data = {pageIndex: this.currentPage}
      this.showData(data)
    },
    methods: {
      showData(data){
        this.$store.dispatch('getRawdata',data)
      },
      handlePaging(val){
        this.currentPage = val
        let pageIndex = {pageIndex: this.currentPage}
        this.showData(pageIndex)
      },
      handleQuery(){
        let query = {imei: this.imei,dt: this.value}
        this.showData(query)
      }
    }
  }
</script>

<style>
</style>

