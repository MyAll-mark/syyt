<template>
    <div class="search">
        <el-autocomplete 
        @select="goDetail" 
        :trigger-on-focus="false" 
        clearable placeholder="请你输入医院名称" 
        v-model="hosname"
        :fetch-suggestions="fetchData" 
        />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';







</script>
<!-- 深度选择器:>>>第一种css  第二种less   /deep/  第三种scss  ::v-deep  -->
<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  :deep(.el-autocomplete) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>