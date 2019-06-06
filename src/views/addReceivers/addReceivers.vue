<template>
  <el-main>
    <div class="main-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="设备类别" prop="type">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目编号">
          <el-input v-model="ruleForm.manager"></el-input>
        </el-form-item>
        <el-form-item label="制造商编码">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="年份的最后一位">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="周数">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="起始编号">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="截止编号">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addCompany">立即添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
</template>

<script>
  import {reqAddCompany} from '../../api/index'
  export default {
    data(){
      return{
        ruleForm: {
          name: '',
          manager: '',
          phone: '',
          email: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      async addCompany(){
        if (!this.ruleForm.name){
          alert("请输入公司名称")
          return
        }
        const data = {name: this.ruleForm.name,manager: this.ruleForm.manager,
          phone: this.ruleForm.phone,email: this.ruleForm.email}
        const result = await reqAddCompany(data)
        if (result.errcode === 0){
          this.ruleForm.name = ''
          this.ruleForm.manager = ''
          this.ruleForm.phone = ''
          this.ruleForm.email = ''
          alert("添加成功")
        } else {
          alert("添加失败")
        }
      }
    }
  }
</script>

<style scoped>
  .main-form{
    width: 100%;
    min-height: 847px;
    background-color: #ffffff;
    overflow: hidden;
  }
  .el-form{
    width: 600px;
    margin: 120px auto 0;
  }
  .el-form .el-form-item{
    margin: 0 0 40px 0;
  }
</style>
