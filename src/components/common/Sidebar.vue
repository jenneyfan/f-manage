<template>
    <div class="sidebar">
        <el-tree
                accordion
                node-key="id"
                current-node-key="1"
                :data="data"
                :props="defaultProps"
                :default-expanded-keys="['1','2','3']"
                @node-click="handleNodeClick">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <i :class="data.icon"></i>
                    <span>{{data.label}}</span>
                </span>
        </el-tree>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                data: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        mounted(){
            this.getMenu();
        },
        methods: {
            getMenu(){
                axios.get('/static/mock/menu.json').then((res)=>{
                    let menuData = res.data.result;
                    this.data = menuData;
                })
            },
            handleNodeClick(data) {
                this.$router.push(data.url);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar .el-tree {
        width: 250px;
        height:100%;
        background: #324157;
    }
    .sidebar .el-tree-node__content{
        height: 50px;
        color: #BFCBD9;
        font-size: 14px;
        transition: all ease 0.4s;
    }
    .el-tree-node:focus>.el-tree-node__content,.sidebar .el-tree-node__content:hover{
        background: #283446;
        color: #20A0FF;
    }
    .el-tree-node i[class*=" el-icon-"], .el-tree-node i[class^="el-icon-"]{
        margin-right: 5px;
        font-size: 16px;
    }
</style>
