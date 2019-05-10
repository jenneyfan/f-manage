<template>
    <div class="sidebar">
        <el-tree
                node-key="id"
                :data="data"
                :props="defaultProps"
                :default-expanded-keys="['1','2','3']"
                accordion
                @node-click="handleNodeClick">
        </el-tree>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                    id:'1',
                    label: '一级 1',
                    url:'url1',
                    children: [{
                        id:'11',
                        label: '二级 1-1',
                        url:'url1-1',
                        children: [{
                            id:'111',
                            label: '三级 1-1-1',
                            url:'url1-1-1',
                        }]
                    }]
                }, {
                    id:'2',
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        id:'21',
                        url:'url2-1',
                        children: [{
                            id:'211',
                            label: '三级 2-1-1',
                            url:'url2-1-1',
                        }]
                    }, {
                        id:'22',
                        label: '二级 2-2',
                        url:'url2-2',
                        children: [{
                            id:'221',
                            label: '三级 2-2-1',
                            url:'url2-2-1'
                        }]
                    }]
                }, {
                    id:'3',
                    label: '一级 3',
                    children: [{
                        id:'31',
                        label: '二级 3-1',
                        url:'url3-1',
                        children: [{
                            id:'311',
                            label: '三级 3-1-1',
                            url:'url3-3-1',
                        }]
                    }, {
                        id:'32',
                        label: '二级 3-2',
                        url:'url3-2',
                        children: [{
                            id:'321',
                            label: '三级 3-2-1',
                            url:'url3-2-1',
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
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
        height: 40px;
        color: #FFF;
        transition: all ease 0.4s;
    }
    .el-tree-node:focus>.el-tree-node__content,.sidebar .el-tree-node__content:hover{
        background: #283446;
    }
</style>
