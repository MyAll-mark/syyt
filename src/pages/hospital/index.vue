<template>
    <div class="hospital">
        <!-- 左侧导航区 -->
        <div class="menu">
            <div class="top">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span> / 医院信息</span>
            </div>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
                    <!-- 图标 -->
                    <el-icon><icon-menu /></el-icon>
                    <!-- 文字 -->
                    <span>预约挂号</span>
                </el-menu-item>
                <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>预约通知</span>
                </el-menu-item>
                <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
                    <el-icon>
                        <InfoFilled />
                    </el-icon>
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧详情 -->
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled,
} from "@element-plus/icons-vue";
import { useRouter,useRoute } from "vue-router";
import { onMounted } from "vue";
import useDetailStore from "@/store/modules/hospitalDetails";
// 获取仓库对象
let detailStore = useDetailStore();
// 获取路由
let $router = useRouter();
// 获取当前路由信息
let $route = useRoute();
const changeActive = (path : string)=>{
    // 跳转到对应路由
    $router.push({path});
}
console.log("hospital下的index",$route.query);
console.log("hospital下的index的$route.query.hoscode",$route.query.hoscode);
// 当组件挂载时通知仓库发请求    当页面不显示时，隐藏就可以显示
onMounted(()=>{
    detailStore.getHospital($route.query.hoscode as string);
})

</script>

<style lang='scss' scoped>
.hospital {
    display: flex;

    .menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;

        .top {
            color: #7f7f7f;
        }
    }

    .content {
        flex: 8;
    }
}
</style>
