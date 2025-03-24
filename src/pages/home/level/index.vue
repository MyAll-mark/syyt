<template>
    <div class="level">
        <!-- 在这里添加 HTML 结构和 Vue 指令 -->
        <h1>医院等级</h1>
        <div class="content">
            <div class="left">等级：</div>
            <ul class="hospital">
                <li :class="{active:activeFlag==''}" @click="changeLevel('')"  >全部</li>
                <li v-for="level in levelArr" :key="level.value" :class="{active:activeFlag==level.value}" @click="changeLevel(level.value)">{{ level.name }}</li>
                <!-- <li >quanbu</li>
                <li >quanbu</li>
                <li >quanbu</li>
                <li >quanbu</li> -->
            </ul>
            
            
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reqHospitalLevelAndRegion } from '@/api/home';
import { onMounted, ref} from 'vue';
import { HospitalLevelAndRegionArr ,HospitalLevelAndRegionResponseData} from '@/api/home/type';
let levelArr = ref<HospitalLevelAndRegionArr>([]);

//控制医院等级高亮响应式数据
let activeFlag = ref<string>('');

onMounted(()=>{
  getLevel();
});

const getLevel = async ()=>{
  let result:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "HosType"
  );

  if(result.code == 200){
    levelArr.value = result.data;
  }
  // console.log("dengji",levelArr);
  // console.log("dengji",levelArr.value);
}

// 控制高亮
//点击等级的按钮回调
const changeLevel = (level:string)=>{
   //高亮响应式数据存储leve数值
   activeFlag.value = level;
   //触发自定义事件:将医院等级参数回传给父组件
   $emit('getLevel',level);
}
let $emit = defineEmits(['getLevel']);

</script>

<script lang="ts">
export default {
  name: "Level",
};
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  margin-top: 20px;
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>