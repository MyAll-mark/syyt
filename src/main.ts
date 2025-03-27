import { createApp } from 'vue'
import '@/style/reset.scss'

import App from '@/App.vue'
//引入全局组件，都可以用
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
//引入路由
import router from './router'
//引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入仓库pinia  妈的傻逼，下面这个引入在这给我秀技术，老老实实引用不行吗？
// import pinia from '@/store'
//解决pinia
import { createPinia } from 'pinia';
const pinia = createPinia();




const app=createApp(App);

app.component('HospitalTop',HospitalTop);
app.component('HospitalBottom',HospitalBottom);
//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn,
});
    
app.use(router);

app.use(pinia);
//挂载
app.mount('#app')

