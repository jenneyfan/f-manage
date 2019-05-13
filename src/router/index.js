import Vue from 'vue';
import Router from 'vue-router';
const Home = ()=> import('../components/common/Home');
const Dashboard = ()=> import('../components/page/Dashboard');
const Table = ()=> import('../components/page/Table');
const Tabs = ()=> import('../components/page/Tabs');
const Form = ()=> import('../components/page/Form');
const Editor = ()=> import('../components/page/Editor');
const Markdown = ()=> import('../components/page/Markdown');
const Upload = ()=> import('../components/page/Upload');

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/dashboard'
        },
        {
            path:'/',
            component:Home,
            children:[
                {
                    path:'/dashboard',
                    component:Dashboard
                },
                {
                    path:'/table',
                    component:Table
                },
                {
                    path:'/tabs',
                    component:Tabs
                },
                {
                    path:'/form',
                    component:Form
                },
                {
                    path:'/editor',
                    component:Editor
                },
                {
                    path:'/markdown',
                    component:Markdown
                },
                {
                    path:'/upload',
                    component:Upload
                }
            ]
        }
    ]
})
