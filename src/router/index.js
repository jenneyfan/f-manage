import Vue from 'vue';
import Router from 'vue-router';
const Home = ()=> import('../components/common/Home');
const Dashboard = ()=> import('../components/page/Dashboard');
const Table = ()=> import('../components/page/Table');

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
                }
            ]
        }
    ]
})
