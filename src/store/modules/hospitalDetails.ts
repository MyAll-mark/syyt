import { defineStore } from "pinia";
import { reqHospitalDetail } from "@/api/hospital";
import type { HospitalDetail } from "@/api/hospital/type";
// 选择式API
const useDetailStore = defineStore('Detail',{
    state:()=>{
        return{
            //医院详情的数据
            hospitalInfo:{}
        }
    },
    actions:{
        async getHospital(hoscode:string){
            let result : HospitalDetail =await reqHospitalDetail(hoscode)
            if (result.code == 200){
                this.hospitalInfo = result.data;
            }
            console.log("hoscode",hoscode)
        }
    },
    getters:{

    },
});
// 获取仓库的方法暴露
export default useDetailStore;