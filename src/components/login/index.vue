<template>
    <div class="login_container">
        <el-dialog v-model="userStore.visiable" title="用户登录">
            
            <el-row>
                <!-- 左侧结构 -->
                <el-col :span="12" class="login">
                    <el-form-item>
                        <el-input placeholder="请输入手机号码" :prefix--icon="User">

                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="请输入1手机验证码" :prefix--icon="Lock">

                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    

                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
// 导入 Vue 相关的 API
import { ref } from 'vue';
import { User, Lock } from "@element-plus/icons-vue";
//获取user仓库的数据( visiable)可以控制login组件的对话框显示与隐藏
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();





</script>

<style lang='scss' scoped>
/* 在这里添加组件的样式 */
.login_container {
  ::v-deep(.el-dialog__body) {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .login {
    padding: 20px;
    border: 1px solid #ccc;
    .webchat {
      display: flex;
      flex-direction: column;
      align-items: center;
      .phone {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin: 10px 0px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 10px 0px;
    }
  }

  .leftContent {
    .top {
      display: flex;
      justify-content: space-around;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 130px;
          height: 130px;
        }
        p {
          margin: 5px 0px;
        }
      }
    }
  }

  .tip {
    text-align: center;
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 900;
  }
}
</style>