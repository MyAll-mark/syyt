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
import {reqHospitalInfo} from '@/api/home'
// import {HospitalLevelAndRegionResponseData} from '@/api/home/type'
import { ref,  } from 'vue';
import { useRouter } from "vue-router";
let $router = useRouter();
//收集搜索的关键字(医院的名字)
let hosname =ref<string>();
// 顶部组件回调
const fetchData=async(keyword:string,cb:any)=>{
  //当用户输入完关键字次函数会执行一次，发请求获取需要展示的数据即可
  let result : any =await reqHospitalInfo(keyword);
//整理数据，变成人家组件需要数据格式
// console.log('result.data是什么',result.data);
  let showdata = result.data.map(item=>{
    return{
      value:item.hosname,//展示的医院的名字
      hoscode:item.hoscode//存储医院的编码
    }
  })
  cb(showdata)
}

//点击某一个推荐项
const goDetail = (item: any) => {
  //点击推荐项目进入医院详情页,将来需要携带query参数(医院的编码)
  $router.push({ path: "/hospital",query:{hoscode:item.hoscode}});
};

</script>
<script lang="ts">
export default {
  name:'Search',
}
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