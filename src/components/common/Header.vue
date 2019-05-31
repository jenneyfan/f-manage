<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="msgCount?`有${msgCount}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="msgCount"></span>
                </div>
                <div class="user-avator"><img src="static/img/img.jpg"></div>
                <el-dropdown class="user-name" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{name}} <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="https://github.com/jenneyfan/f-manage" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                collapse:false,
                username:'Jenney',
                fullscreen:false
            }
        },
        computed:{
            name(){
                let name = localStorage.getItem('username');
                return name = name ? name : this.username;
            },
            ...mapState(['msgCount'])
        },
        methods:{
            handleCommand(command){
                if(command == 'logout'){
                    localStorage.removeItem('username');
                    this.$router.push('/login');
                }
            },
            handleFullScreen(){
                let element = document.documentElement;
                if(this.fullscreen){
                    if(document.exitFullscreen){
                        document.exitFullscreen();
                    }else if(document.webkitCancelFullScreen){
                        document.webkitCancelFullScreen();
                    }else if(document.mozCancelFullScreen){
                        document.mozCancelFullScreen();
                    }else if(document.msExitFullScreen){
                        document.msExitFullScreen();
                    }
                }
                else {
                    if(element.requestFullscreen){
                        element.requestFullscreen()
                    }else if(element.webkitRequestFullScreen){
                        element.webkitRequestFullScreen()
                    }else if(element.mozRequestFullScreen){
                        element.mozRequestFullScreen()
                    }else if(element.msRequestFullScreen){
                        element.msRequestFullScreen()
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
