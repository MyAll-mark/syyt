<template>
    <div class="top"> 
        <div class="content">
            <div class="left" @click="goDetail">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login" @click="login" >登录/注册</p>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { useRouter,useRoute } from "vue-router";
//获取user仓库的数据( visiable)可以控制login组件的对话框显示与隐藏
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();

//获取路由器对象
let $router = useRouter();
let $route = useRoute();
//点击医院卡片的时候跳转到医院详情页面
console.log($route);
const goDetail = () => {
  $router.push({ path: "/home"});
};

const login=()=>{
  userStore.visiable=true;
};


</script>

<style  scoped lang="scss"> 
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;
      .help {
        margin-right: 10px;
      }
    }
  }
}

</style>
