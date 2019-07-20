<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm" @keyup.enter.native="submitForm('ruleForm')">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="password"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名:admin/Jenney，密码：123456</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        components: {},
        name: 'HelloWorld',
        data() {
            return {
                ruleForm:{
                    username:'admin',
                    password:'123456'
                },
                rules:{
                    username:[
                        {required:true, message:'请输入用户名',trigger:'blur'}
                    ],
                    password:[
                        {required:true, message:'请输入密码',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid)=>{
                    let _this = this;
                    if(valid){
                        axios.get('https://easy-mock.com/mock/5b92369add287013d019e24f/example/user').then((res)=>{
                            let data = res.data.result;
                            if(res.status == 200){
                                let result = data.find((item)=>{
                                    return item.username == _this.ruleForm.username;
                                });
                                if(result){
                                    if(result.password == _this.ruleForm.password){
                                        localStorage.setItem('username',result.username);
                                        this.$router.push('/');
                                        this.getUserInfo(result);
                                    }else{
                                        this.$message.error('密码错误，请重新输入');
                                    }
                                }else {
                                    this.$message.error('请检查用户名是否正确');
                                }
                            }else{
                                this.$message.error('服务器错误');
                            }
                        });
                    }else{
                        return false;
                    }
                })
            },
            getUserInfo(loginMsg){
              this.$store.commit('updateUserName',loginMsg.username);
              this.$store.commit('updateUserRole',loginMsg.role);
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
