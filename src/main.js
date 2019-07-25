// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vuex);
Vue.use(ElementUI,{size:'small'});
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state:{
        user:'admin',
        role:'系统管理员',
        loginDate: localStorage.getItem('lastDate') || '第一次登录',
        msgCount:2
    },
    mutations:{
        updateUserName(state,user){
            state.user = user;
        },
        updateUserRole(state,role){
            state.role = role;
        },
        updateDate(state,loginDate){
            state.loginDate = loginDate;
        },
        updateMsgCount(state,msgCount){
            state.msgCount = msgCount;
        }
    }
});

router.beforeEach((to,from,next)=>{
    const role = localStorage.getItem('username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.title == '权限测试'){
        role === 'admin' ? next() : next('/403');
    }else{
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
});
