<template>
    <div class="container"> 
      <!-- 顶部全局组件 -->
      <HospitalTop/>
      <!-- 展示路由组件区域 -->
       <div class="content">
          <router-view></router-view>
       </div>
       <HospitalBottom/>
    </div>
</template>

<script setup lang="ts">




</script>

<style lang='scss' scoped> 
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .content {
    //顶部为70
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    // background-color: red;
  }
}
</style>
