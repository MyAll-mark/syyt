import {defineStore} from "pinia"

// 使用 Pinia 状态管理库来定义一个名为 User 的 store
const useUserStore = defineStore("User",  {
    state:()=>{
        return{
            visiable:false,//用于控制登录组件dialog显示与否的

        }
    },
    actions:{

    },

    getters:{

    }

} );

export default useUserStore;