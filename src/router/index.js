import Vue from 'vue';
import Router from 'vue-router';
const Home = ()=> import('../components/common/Home');
const Dashboard = ()=> import('../components/page/Dashboard');
const BaseTable = ()=> import('../components/page/BaseTable');
const Tabs = ()=> import('../components/page/Tabs');
const BaseForm = ()=> import('../components/page/BaseForm');
const Editor = ()=> import('../components/page/Editor');
const Markdown = ()=> import('../components/page/Markdown');
const Upload = ()=> import('../components/page/Upload');
const DragList = ()=> import('../components/page/DragList');
const Permission = ()=> import('../components/page/Permission');
const Login = ()=> import('../components/page/Login');
const Page403 = ()=> import('../components/page/403');
const Page404 = ()=> import('../components/page/404');

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/dashboard',
            meta:{title:'管理首页'}
        },
        {
            path:'/',
            component:Home,
            meta:{title:'管理首页'},
            children:[
                {
                    path:'/dashboard',
                    component:Dashboard,
                    meta:{title:'管理首页'},
                },
                {
                    path:'/table',
                    component:BaseTable,
                    meta:{title:'基础表格'}
                },
                {
                    path:'/tabs',
                    component:Tabs,
                    meta: { title: 'tab选项卡' }
                },
                {
                    path:'/form',
                    component:BaseForm,
                    meta: { title: '基本表单' }
                },
                {
                    path:'/editor',
                    component:Editor,
                    meta: { title: '富文本编辑器' }
                },
                {
                    path:'/markdown',
                    component:Markdown,
                    meta: { title: 'markdown编辑器' }
                },
                {
                    path:'/upload',
                    component:Upload,
                    meta: { title: '文件上传' }
                },
                {
                    path:'/draglist',
                    component:DragList,
                    meta: { title: '拖拽列表' }
                },
                {
                    path:'/permission',
                    component:Permission,
                    meta: { title: '权限测试' }
                }
            ]
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/403',
            component:Page403
        },
        {
            path:'/404',
            component:Page404
        },
        {
            path:'*',
            redirect:'/404'
        }
    ]
})
