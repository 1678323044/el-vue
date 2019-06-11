<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>总纪录条数：{{createReceivers.count}}</span>
    <span>失败条数：{{createReceivers.failedcount}}</span> <br><br>
    <span>失败设备号的数组：<br>{{createReceivers.faileds}}</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: ['dialogVisible'],
    computed: {
      ...mapState(['createReceivers'])
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
