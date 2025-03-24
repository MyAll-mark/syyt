<template>
    <div class="region">
        <!-- 在这里添加 HTML 结构和 Vue 指令 -->
        <div class="content">
        <div class="left">地区：</div>
        <ul>
            <li :class="{active:RegionFlag==''}" @click="changeRegion('')">全部</li>
            <li v-for="item in RegionArr"  :key="item.value" :class="{active:RegionFlag==item.value}" @click="changeRegion(item.value)">{{ item.name }}</li>
            <!-- <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li> -->
        </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref,onMounted } from 'vue';
import { reqHospitalLevelAndRegion } from '@/api/home';
import {HospitalLevelAndRegionArr,HospitalLevelAndRegionResponseData} from '@/api/home/type';
//存储地区的数据
let RegionArr = ref<HospitalLevelAndRegionArr>([]);
//地区高亮的响应式数据
let RegionFlag = ref<string>('')

onMounted(()=> {
  getRegion();
});

const getRegion = async ()=>{
  let result : HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "Beijin"
  )
  if(result.code == 200){
    RegionArr.value = result.data;
  }
  // console.log("diqu",RegionArr);
  // console.log("diqu",RegionArr.value);
}

const changeRegion = (region:string)=>{
      RegionFlag.value = region;
      //给父组件传递区域的参数
      $emit('getRegion',region);
}
let $emit = defineEmits(['getRegion'])

</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 20px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 50px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
      }
    }
  }
}
</style>