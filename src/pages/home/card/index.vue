<template>
    <el-card class="box-card" shadow="hover" @click="goDetail">
        <div class="content">
            <div class="left">
                <div class="hospital_name">
                  {{hospitalInfo.hosname}}
                   <!-- beijing -->
                </div>
                <div class="tip">
                    <div class="level">
                        <svg t="1742265207124" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3234" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="3235"></path></svg>
                    <span>{{ hospitalInfo.param.hostypeString }}</span>
                    <!-- <span>三级</span> -->
                    </div>  
                    <div class="time">
                        <svg t="1742265181849" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2164" width="16" height="16"><path d="M917.333333 512c0-223.850667-181.482667-405.333333-405.333333-405.333333S106.666667 288.149333 106.666667 512s181.482667 405.333333 405.333333 405.333333 405.333333-181.482667 405.333333-405.333333z m-425.984-5.333333a21.333333 21.333333 0 0 0 6.101334 20.928l124.8 116.394666a21.333333 21.333333 0 0 0 29.12-31.189333l-118.08-110.122667L533.333333 501.333333v-170.666666a21.333333 21.333333 0 0 0-42.666666 0v170.666666c0 1.834667 0.213333 3.626667 0.682666 5.333334zM149.333333 512c0-200.298667 162.368-362.666667 362.666667-362.666667s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512z m612.501334 305.002667a21.333333 21.333333 0 1 0-30.336 29.994666l74.304 75.157334a21.333333 21.333333 0 1 0 30.336-29.994667l-74.304-75.157333z m-480.362667 29.994666a21.333333 21.333333 0 0 0-30.336-29.994666L176.832 892.16a21.333333 21.333333 0 1 0 30.336 29.994667l74.304-75.157334zM778.496 128A117.525333 117.525333 0 0 1 896 245.333333a21.333333 21.333333 0 0 0 42.666667 0C938.666667 157.077333 866.901333 85.333333 778.496 85.333333h-20.992a21.333333 21.333333 0 1 0 0 42.666667h20.992zM245.504 85.333333C157.098667 85.333333 85.333333 157.077333 85.333333 245.333333a21.333333 21.333333 0 0 0 42.666667 0C128 180.629333 180.672 128 245.504 128h20.992a21.333333 21.333333 0 1 0 0-42.666667h-20.992z" fill="#3D3D3D" p-id="2165"></path></svg>
                        <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
                        <!-- <span>每天</span> -->
                    </div>
                </div>
            </div>
            
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
                 <!-- <img src="@/assets/images/logo.png" alt=""> -->
            </div>
        </div>
        
    </el-card>
</template>

<script setup lang='ts'>
// 导入 Vue 相关的 API
let props=defineProps(['hospitalInfo']);

// console.log('子组件',props);

import { useRouter } from "vue-router";
//获取路由器对象
let $router = useRouter();
//点击医院卡片的时候跳转到医院详情页面
const goDetail = () => {
  $router.push({ path: "/hospital",query:{hoscode:props.hospitalInfo.hoscode}});
};
// const goDetail=() =>{
//   $route.push({ path: "/hospital/register",query:{hoscode:item.hoscode}});
// }
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  .right {
    img {
      width: 50px;
      height: 50px;
    }
  }
  .left {
    width: 60%;
    .tip {
      color: #7f7f7f;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .level {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .time {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>