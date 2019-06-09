<template>
  <div>
    <div class="bg"></div>
    <div class="popup">
      <div class="popup-top">
        <p>编辑公司</p>
        <span @click="leave"><i class="el-icon-close"></i></span>
      </div>
      <el-form :model="currCompany" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="currCompany.name"></el-input>
        </el-form-item>
        <el-form-item label="管理人">
          <el-input v-model="currCompany.manager"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="currCompany.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="currCompany.email"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" @click="editCompanies">确定</el-button>
        <el-button type="primary" @click="leave">取消</el-button>
      </el-row>
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
        rules: {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      leave(){
        PubSub.publish('cancel')
      },
      async editCompanies(){
        if (!this.ruleForm.name) {
          alert("请输入公司名称")
          return
        }
        const data = {cid: this.currCompany.cid,name: this.ruleForm.name,manager: this.ruleForm.manager,
          phone: this.ruleForm.phone,email: this.ruleForm.email}
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
    height: 484px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 20%;
    margin: 0 0 0 -450px;
    z-index: 99999;
  }
  .popup .popup-top{
    line-height: 55px;
    background-color: #324157;
    color: #ffffff;
    overflow: hidden;
  }
  .popup .popup-top p{
    float: left;
    text-indent: 50px;
  }
  .popup .popup-top span{
    float: right;
    text-align: center;
    font-size: 26px;
    padding: 0 20px 0;
    cursor: pointer;
  }
  .el-form{
    margin: 90px 0 50px 40px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .el-form-item{
    margin: 0 0 40px 0;
  }
  .el-form .el-form-item div{
    width: 270px;
    margin-left: 10px!important;
  }
  .el-form .el-form-item label{
    font-size: 16px!important;
  }
  .popup .el-row{
    text-align: center;
  }
  .popup .el-row .el-button{
    width: 80px;
    margin: 0 15px;
  }
</style>
