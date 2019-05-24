<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单 </el-breadcrumb-item>
                <el-breadcrumb-item> markdown编辑器 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                mavonEditor：基于Vue的markdown编辑器。
                访问地址：<a href="https://github.com/hinesboy/mavonEditor" target="_blank">mavonEditor</a>
            </div>
            <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 500px"></mavon-editor>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mavonEditor} from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css';
    export default {
        components: {mavonEditor},
        name:'markdown',
        data() {
            return {
                content:'',
                html:'',
                configs:{}
            }
        },
        methods:{
            $imgAdd(pos,$file){
                var formdata = new FormData();
                formdata.append('file',$file);
                axios({
                    url:'',
                    method:'post',
                    data:formdata,
                    headers:{'Content-Type':'multipart/form-data'}
                }).then((url)=>{
                    this.$refs.md.$img2Url(pos,url)
                });
            },
            change(value,render){
                this.html = render;
            },
            submit(){
                console.log(this.content);
                console.log(this.html);
                this.$message.success('提交成功！');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
