<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-date"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" prop="options">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="活动时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="请选择日期" v-model="form.date1" style="width: 100%">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker placeholder="请选择时间" v-model="form.date2" style="width: 100%">
                                </el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="delivery" label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item prop="type" label="活动性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源" prop="resource">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌赞助商"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'baseform',
        data() {
            return {
                options:[
                    {
                        value: 'guangdong',
                        label: '广东省',
                        children: [
                            {
                                value: 'guangzhou',
                                label: '广州市',
                                children: [
                                    {
                                        value: 'tianhe',
                                        label: '天河区'
                                    },
                                    {
                                        value: 'haizhu',
                                        label: '海珠区'
                                    }
                                ]
                            },
                            {
                                value: 'dongguan',
                                label: '东莞市',
                                children: [
                                    {
                                        value: 'changan',
                                        label: '长安镇'
                                    },
                                    {
                                        value: 'humen',
                                        label: '虎门镇'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'hunan',
                        label: '湖南省',
                        children: [
                            {
                                value: 'changsha',
                                label: '长沙市',
                                children: [
                                    {
                                        value: 'yuelu',
                                        label: '岳麓区'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                },
                rules:{
                    name:[
                        {required:true, message:'请输入活动名称',trigger:'blur'},
                        {min:3, max:5, message:'长度在 3 到 5 个字符',trigger:'blur'}
                    ],
                    options:[
                        {required:true, message:'请选择活动区域',trigger:'change'}
                    ],
                    date1:[
                        {type:'date',required:true, message:'请选日期',trigger:'change'}
                    ],
                    date2:[
                        {type:'date',required:true, message:'请选时间',trigger:'change'}
                    ],
                    type:[
                        {type:'array',required:true, message:'请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource:[
                        {required:true,message: '请选择活动资源', trigger: 'change'}
                    ],
                    desc:[
                        {required:true,message: '请填写活动形式', trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            onSubmit(form){
                this.$refs[form].validate((valid)=>{
                    console.log(valid);
                    if(valid){
                        this.$message.success('提交成功！');
                    }else{
                        this.$message.error('提交失败，请检查输入信息！');
                        return false;
                    }
                });
            },
            resetForm(form){
                this.$refs[form].resetFields();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
