<template>
  <el-main>
    <div class="main-form">
      <div class="form-title">
        设备入库
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
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
        <el-form-item label="项目编号" prop="project">
          <el-input v-model.number="ruleForm.project"></el-input>
        </el-form-item>
        <el-form-item label="制造商编码" prop="manufacturer">
          <el-input v-model.number="ruleForm.manufacturer"></el-input>
        </el-form-item>
        <el-form-item label="年份的最后一位" prop="year">
          <el-input v-model.number="ruleForm.year"></el-input>
        </el-form-item>
        <el-form-item label="周数" prop="week">
          <el-input v-model.number="ruleForm.week"></el-input>
        </el-form-item>
        <el-form-item label="起始编号" prop="startnumber">
          <el-input v-model.number="ruleForm.startnumber"></el-input>
        </el-form-item>
        <el-form-item label="截止编号" prop="endnumber">
          <el-input v-model.number="ruleForm.endnumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
</template>

<script>
  export default {
    data(){
      let checkOne = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        if (!Number.isInteger(value) || value.toString().length !== 1) {
          callback(new Error('请输入1位的数字'));
          return
        }
        callback();
      };
      let checkTwo = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        if (!Number.isInteger(value) || value.toString().length !== 2) {
          callback(new Error('请输入2位的数字'));
          return
        }
        callback();
      };
      let checkRange = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('编号不能为空'));
        }
        if (!Number.isInteger(value) || value <= 0 || value >= 9999) {
          callback(new Error('请输入0-9999范围的数字'));
          return
        }
        callback()
      };
      return{
        ruleForm: {
          project: '',
          manufacturer: '',
          year: '',
          week: '',
          startnumber: '',
          endnumber: ''
        },
        rules: {
          project: [ { validator: checkTwo, trigger: 'blur' } ],
          manufacturer: [ { validator: checkOne, trigger: 'blur' } ],
          year: [ { validator: checkOne, trigger: 'blur' } ],
          week: [ { validator: checkTwo, trigger: 'blur' } ],
          startnumber: [ { validator: checkRange, trigger: 'blur' } ],
          endnumber: [ { validator: checkRange, trigger: 'blur' } ]
        },
        options: [{
          value: '选项1',
          label: '小车'
        }, {
          value: '选项2',
          label: '大车'
        }, {
          value: '选项3',
          label: '挂车'
        }, {
          value: '选项4',
          label: '车头'
        },{
          value: '选项5',
          label: '整车'
        }],
        value: ''
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .main-form{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    overflow: hidden;
  }
  .form-title{
    line-height: 90px;
    font-size: 18px;
    text-indent: 40px;
  }
  .el-form{
    width: 60%;
    margin: 60px auto 0;
  }
  .el-form-item{
    margin: 0 0 50px 0;
  }
  .el-form-item >>> .el-form-item__content{
    margin-left: 180px!important;
  }
  .el-input >>> input{
    height: 45px;
  }
  .el-select >>> .el-input input{
    height: 45px;
  }
  .el-select >>> .el-input{
    width: 340px;
  }
</style>
