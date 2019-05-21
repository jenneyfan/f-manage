<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-tickets"></i> 基础表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-select v-model="selectCate" placeholder="筛选省份" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="selectWord" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="date" label="日期" sortable width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev,pager, next" :total="1000"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        components: {},
        name:'basetable',
        data() {
            return {
                url: '/static/mock/vuetable.json',
                tableData:[],
                curPage:1,
                multipleSelection: [],
                selectCate:'',
                selectWord:'',
                delList:[],
                isSearch:false,
                editVisible:false,
                delVisible:false,
                form:{
                    name:'',
                    date:'',
                    address:''
                },
                idx:-1
            }
        },
        created(){
            this.getData();
        },
        computed:{
            data(){
                return this.tableData.filter((item)=>{
                    let isDel = false;
                    for(let i = 0; i < this.delList.length; i++){
                        if(item.name === this.delList[i].name){
                            isDel = true;
                            break
                        }
                    }
                    if(!isDel){
                        if(item.address.indexOf(this.selectCate) > -1 && (item.name.indexOf(this.selectWord) > -1 || item.address.indexOf(this.selectWord) > -1)) {
                            return item;
                        }
                    }
                })
            }
        },
        methods:{
            handleCurrentChange(val){
                this.multipleSelection = val;
                console.log(this.multipleSelection);
            },
            getData(){
                axios.get(this.url,{
                    page:this.curPage
                }).then((res)=>{
                    this.tableData = res.data.list
                })
            },
            search(){
                this.isSearch = true;
            },
            filterTag(value,row){

            },
            handleEdit(index,row){

            },
            handleDelete(index,row){

            },
            delAll(){

            },
            handleSelectionChange(){

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
</style>
