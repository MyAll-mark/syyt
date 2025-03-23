import { createApp } from 'vue'
import '@/style/reset.scss'
// import App from './App.vue'
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




const app=createApp(App);

app.component('HospitalTop',HospitalTop);
app.component('HospitalBottom',HospitalBottom);
//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn,
});
    
app.use(router);
//挂载
app.mount('#app')
// createApp(App).mount('#app')
