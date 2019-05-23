<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
            </div>
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" @change="onEditorChange($event)"></quill-editor>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        components: {quillEditor},
        name:'editor',
        data() {
            return {
                content:'',
                editorOption:{
                    placeholder:'Hello World'
                }
            }
        },
        methods:{
            onEditorChange(obj){
                console.log('editor change!', obj)
                this.content = obj.html;
            },
            submit(){
                console.log(this.content);
                if(this.content==''){
                    this.$message.error('内容不能为空！');
                    return;
                }else{
                    this.$message.success('提交成功');
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
