<template>
  <div>
    <div class="bg"></div>
    <div class="popup">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="管理人" prop="name">
          <el-input v-model="ruleForm.manager"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editCompanies">确定</el-button>
          <el-button type="primary" @click="leave">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import {reqEditCompany} from '../../api/index'
  export default {
    props: {
      currCompany: Object
    },
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
          ],
          manager: [
            { required: true, message: '请输入管理人姓名', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ]
        }
      }
    },
    created(){
      this.ruleForm = this.currCompany
      console.log(this.ruleForm)
    },
    methods: {
      leave(){
        PubSub.publish('cancel')
      },
      async editCompanies(){
        const data = {cid: this.currCompany.cid,name: this.ruleForm.name,manager: this.ruleForm.manager,
          phone: this.ruleForm.phone,email: this.ruleForm.email}
          console.log(data)
        const result = await reqEditCompany(data)
        if (result.errcode === 0) {
          location.reload()
        }else {
          alert("编辑失败")
        }
      }
    }
  }
</script>

<style scoped>
  .bg{
    width: 100%;
    height: 100%;
    background-color: #333333;
    opacity: 0.6;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .popup{
    width: 900px;
    height: 600px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 10%;
    margin: 0 0 0 -450px;
    z-index: 99999;
    padding: 50px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .el-form{
    margin: 50px 0 0 0;
  }
  .el-form .el-form-item div{
    width: 500px;
    margin-left: 50px!important;
  }
  .el-form .el-form-item label{
    font-size: 16px!important;
  }
</style>
