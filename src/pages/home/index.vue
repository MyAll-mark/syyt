<template>
    <div>
        <!-- 轮播图 -->
        <Carousel></Carousel>
        <!-- 首页搜索医院 -->
        <Search></Search>
        <!-- 底部展示医院结构 -->
        <el-row gutter="20">
            <el-col :span="20">
                <!-- 等级子组件 -->
                <Level @getLevel="getLevel" />  
                 <!--地区 -->
                <Region @getRegion="getRegion" />
                <div class="hospital" v-if="hasHospitalArr.length > 0">
                    <!-- <Card class="item" v-for="(item, index) in total" :key="index" :hospitalInfo="item" /> -->
                    <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
                    <!-- v-for="(item, index) in hasHospitalArr" -->
                    <!-- <Card class="item" v-for="item in 10" :key="item" ></Card> -->
                </div>
                <el-empty v-else description="暂无数据" />
                <!-- 分页器 -->
                <el-pagination 
                v-model:current-page="pageNo" 
                v-model:page-size="pageSize" 
                :page-sizes="[10, 20, 30, 40]"
                    :background="true" 
                    layout="prev, pager, next, jumper,->,sizes,total" 
                    :total="total"
                    @current-change="currentChange" 
                    @size-change="sizeChange" />
            </el-col>
            <el-col :span="4">

            </el-col>

        </el-row>

    </div>
</template>

<script setup lang="ts">
//引入组合式API函数
import { onMounted, ref } from "vue";
import { reqHospital } from "@/api/home";

import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue"
import Card from "./card/index.vue"
import { Content, HospitalResponseData } from "@/api/home/type";


// let pageNo=ref<number>(1)
//分页器页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(10);
//存储已有的医院的数据
let hasHospitalArr = ref<Content>([]);
//存储医院总个数
let total = ref<number>(10);
//存储医院的等级相应数据
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");

// 组件挂载结束再发一次请求。
onMounted(() => {
    getHospitalInfo()
});
// 读取已有医院数据
const getHospitalInfo = async () => {
    // 获取医院数据，默认第一页，一页十个医院数据
    let result: HospitalResponseData = await reqHospital(
        pageNo.value,
        pageSize.value,
        hostype.value,
        districtCode.value


    );
    console.log(result);


    if (result.code == 200) {
        hasHospitalArr.value = result.data.content;
        total.value = result.data.totalElements;

    }
    // console.log("home/index",result.data.content);
    console.log("home/index/hasHospitalArr",hasHospitalArr.value);
    // console.log(result.data.totalElements);

}

//分页器页码发生变化时候回调
const currentChange = () => {
    getHospitalInfo();
};
//分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
    //当前页码归第一页
    pageNo.value = 1;
    //再次发请求获取医院的数据
    getHospitalInfo();
};


//子组件自定义事件:获取儿子给父组件传递过来的等级参数
const getLevel = (level: string) => {
  //收集参数:等级参数
  hostype.value = level;
  //再次发请求
  getHospitalInfo();
};
//子组件自定义事件：获取子组件传递过来的地区参数
const getRegion = (region: string) => {
  //存储地区的参数
  districtCode.value = region;
  getHospitalInfo();
};
</script>

<style lang='scss ' scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}

</style>
