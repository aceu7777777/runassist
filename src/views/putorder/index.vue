<template>
<div>
    <div class="flex"> 
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="跑腿地址" prop="runaddress">
        <el-input  v-model="ruleForm.runaddress" ></el-input>
    </el-form-item>
    <el-form-item label="联系人" prop="contact">
        <el-input  v-model="ruleForm.contact" ></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="收货地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>
    <el-form-item label="跑腿类型" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
    </el-form-item>
    <el-form-item label="详细内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
    </el-form-item>
    <el-form-item label="完成时间" prop="time">
        <el-input v-model="ruleForm.time"></el-input>
    </el-form-item>
    <el-form-item label="跑腿金额" prop="region">
    <el-select v-model="ruleForm.money" placeholder="请选择金额">
        <el-option label="3元" value="3元"></el-option>
        <el-option label="4元" value="4元"></el-option>
        <el-option label="5元" value="5元"></el-option>
        <el-option label="6元" value="6元"></el-option>
        <el-option label="7元" value="7元"></el-option>
        <el-option label="8元" value="8元"></el-option>
        <el-option label="9元" value="9元"></el-option>
        <el-option label="10元" value="10元"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm">提交订单</el-button>
        <el-button @click="resetForm">内容重置</el-button>
    </el-form-item>
    </el-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        //下单表单的数据
        return {
        ruleForm: {
            runaddress:'',
            contact:'',
            phone:'',
            address:'',
            type:'',
            content:'',
            time:'',
            money:'',
        },
        //下单表单的验证规则
        rules: {
            runaddress: [
            {  required: true, message: '请输入跑腿地址', trigger: 'blur' },
            {  pattern: /^[a-zA-Z0-9]{1,10}$/, message: '请正确输入跑腿地址', trigger: 'blur'}
            ],
            contact: [
            {  trigger: 'blur' }
            ],
            phone: [
            { trigger: 'blur' }
            ],
            address: [
            { trigger: 'blur' }
            ],
            type: [
            { trigger: 'blur' }
            ],
            content: [
            { trigger: 'blur' }
            ],
            time: [
            { trigger: 'blur' }
            ],
            region:[
            { trigger: 'blur' }
            ],
        }
        };
    },
    methods: {
        submitForm() {
        

        },
        resetForm() {

        }
}
}
</script>

<style lang="less" scoped>
.demo-ruleForm{
    padding-top: 50px;
    width: 500px;
    
}
.flex{
    display: flex;
    justify-content: center;
}
</style>