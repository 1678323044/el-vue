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
      <el-button type="primary" @click="handleQuery" :disabled="btnStatus">查询</el-button>
    </div>
    <div class="main-table">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        :data="rawDatas"
        style="width: 100%">
        <el-table-column
          prop="imei"
          label="设备号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="dt"
          label="数据类别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="t"
          label="时间"
          width="170">
        </el-table-column>
        <el-table-column
          prop="rawdata"
          label="数据">
        </el-table-column>
        <el-table-column
          label="数据状态"
          width="100">
          <template slot-scope="scope">
            <p>{{scope.row.stat | filterStat}}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="110">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleAnalysis(scope.row)">解析</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        @current-change="handlePaging"
        :current-page="currentPage"
        :total="count">
      </el-pagination>
    </div>
    <analysis-page v-show="toggle"></analysis-page>
  </el-main>
</template>

<script>
  import '../../common/css/comm.css'
  import analysisPage from '../../components/analysisPage/analysisPage'
  import PubSub from 'pubsub-js'
  export default {
    data() {
      return {
        currentPage: 1,
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
        toggle: false,    //解析的弹窗
        loading: false,   //加载的状态
        btnStatus: false  //按钮的状态
      }
    },
    components: {
      analysisPage
    },
    computed: {
      rawDatas(){
        return this.$store.state.rawdataInfo.rawdatas
      },
      count(){
        return this.$store.state.rawdataInfo.count
      }
    },
    created(){
      let data = {pageIndex: this.currentPage}
      this.showData(data)
      PubSub.subscribe('cancel', msg => {
        this.toggle = false
      })
    },
    methods: {
      showData(data){
        this.$store.dispatch('getRawdata',data)
      },
      handlePaging(val){
        this.currentPage = val
        let pageIndex = {pageIndex: this.currentPage,imei: this.imei,dt: this.value}
        this.showData(pageIndex)
        this.loading = true
        this.btnStatus = true
      },
      handleQuery(){
        let query = {imei: this.imei,dt: this.value}
        this.showData(query)
        this.loading = true
        this.btnStatus = true
      },
      //处理原始数据的解析请求
      handleAnalysis(val){
        const data = {text: val.rawdata}
        this.toggle = true
        this.$store.dispatch('getAnalysis',data)
      }
    },
    watch: {
      rawDatas(){
        this.$nextTick(() => {
          this.loading = false
          this.btnStatus = false
        })
      }
    }
  }
</script>

