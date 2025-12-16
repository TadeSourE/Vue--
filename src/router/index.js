import {createRouter, createWebHashHistory} from 'vue-router' //导入路由插件
//页面引入
import Layout from '../views/Main.vue' 
import login from '../views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import Admin from '../views/auth/admin/index.vue'
import Group from '../views/auth/group/index.vue'
import Staff from '../views/vppz/staff/index.vue'
import Order from '../views/vppz/order/index.vue'

//路由转跳页面
const routes = [
    {
    path:'/',
    component: Layout, //待机
    name: 'main',
    children:[
        {
            path:'dashboard',
            meta: {id:'1',name:'控制台',icon:'Platform',path:'/dashboard',describe:'用于展示当前系统中统计的数据和统计报表'},
            component: Dashboard   
        },
        {
            path:'auth',
            meta: {id:'2',name:'权限管理',icon:'Grid'},
            children:[
                {
                    path:'',
                    alias: ['admin'],
                    meta: {id:'1',name:'账号管理',icon:'Avatar',path:'/auth/admin',describe:'管理员可以修改权限进行编辑'},
                    component: Admin
                },
                {
                     path:'group',
                     meta: {id:'2',name:'菜单管理',icon:'Menu',path:'/auth/group',describe:'菜单规则通常对应着一个控制器方法'},
                     component: Group  
                }
            ]    
        },
        {
            path:'vppz',
            meta: {id:'3',name:'曼波陪诊',icon:'BellFilled',path:'/vppz'},
            children:[
                {
                    path:'',
                    alias: ['staff'],
                    meta: {id:'1',name:'陪护管理',icon:'Checked',path:'/vppz/staff',describe:'陪护师可以进行创建和修改'},
                    component:Staff
                },
                {
                    path:'order',
                    meta: {id:'2',name:'订单管理',icon:'List',path:'/vppz/order',describe:'订单后台可以查看详细信息'},
                    component:Order
                }
        ]

        }
    ]
      
    },
    
    {
        path:'/login',
        component: login   //登录页面
    }
]
const router = createRouter(
    {
        routes, //路由数据
        history: createWebHashHistory() //路由匹配模式
    }
)
export default router  //导出路由