import { defineStore } from "pinia";
// 选择式API
const useDetailStore = defineStore('Detail',{
    state:()=>{
        return{}
    },
    actions:{

    },
    getters:{

    },
});
// 获取仓库的方法暴露
export default useDetailStore;