<template>
  <el-main>
    <div class="main-form">
      <div class="form-title">
        设备入库
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请填写公司名称"></el-input>
        </el-form-item>
        <el-form-item label="管理人">
          <el-input v-model="ruleForm.manager" placeholder="请填写管理人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="ruleForm.phone" placeholder="请填写联系电话"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" placeholder="请填写邮箱地址">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addCompany">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重新输入</el-button>
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-form-item >>> .el-form-item__label{
    width: 130px!important;
  }
  .el-form-item >>> .el-form-item__content{
    margin-left: 180px!important;
  }
  .el-input >>> input{
    height: 45px;
    border: solid 1px #c2cede;
  }
  .el-button+.el-button{
    margin-left: 40px;
  }
</style>

