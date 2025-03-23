import { createRouter,createWebHistory } from "vue-router";
//createRouter方法,用于创建路由器实例，可以管理多个路由
export default createRouter({
    history:createWebHistory(),
    //管理路由
    routes:[
        {
            path:'/home',
            component:()=>import('@/pages/home/index.vue')
        },
        {
            path:'/hospital',
            component:()=>import('@/pages/hospital/index.vue')
        },
        {
            path:'/',
            redirect:'/home'
        },


       
    ],

    scrollBehavior () {
        return{
            left:0,
            top:0
        }
    },




})
