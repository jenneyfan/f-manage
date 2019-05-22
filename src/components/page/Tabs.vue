<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-message"></i> tab选项卡
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未读消息(${list.unread.length})`" name="first">
                    <el-table :data="list.unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="handle-row">
                        <el-button type="primary" @click="handleReadAll">全部标为已读</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${list.read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="list.read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="180"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleDel(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger" @click="handleDelAll">全部删除</el-button>
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`回收站(${list.recycle.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="list.recycle" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="180"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button size="small" @click="handleRestore(scope.$index)">还原</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="handle-row">
                            <el-button type="danger" @click="handleRestoreAll">清空回收站</el-button>
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        name:'tabs',
        data() {
            return {
                message: 'first',
                showHeader:false,
                list:{
                    unread: [{
                        date: '2018-04-19 20:00:00',
                        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                    },{
                        date: '2018-04-19 21:00:00',
                        title: '今晚12点整发大红包，先到先得',
                    }],
                    read: [{
                        date: '2018-04-19 20:00:00',
                        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                    }],
                    recycle: [{
                        date: '2018-04-19 20:00:00',
                        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                    }]
                }
            }
        },
        methods:{
            handleRead(idx){
                this.changeArr('unread','read',idx);
            },
            handleDel(idx){
                this.changeArr('read','recycle',idx);
            },
            handleRestore(idx){
                this.changeArr('recycle','read',idx);
            },
            handleReadAll(){
                this.concatArr('unread','read');
            },
            handleDelAll(){
                this.concatArr('read','recycle');
            },
            handleRestoreAll(){
                this.concatArr('recycle','read');
            },
            changeArr(arr1,arr2,idx){
                const item = this.list[arr1].splice(idx,1);
                this.list[arr2] = item.concat(this.list[arr2]);
            },
            concatArr(arr1,arr2){
                this.list[arr2] = this.list[arr1].concat(this.list[arr2]);
                this.list[arr1] = [];
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .message-title{
        cursor: pointer;
    }
    .handle-row{
        margin-top: 30px;
    }
</style>
