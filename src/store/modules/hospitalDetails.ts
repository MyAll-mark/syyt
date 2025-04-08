import { defineStore } from "pinia";
import { reqHospitalDetail,reqHospitalDeparment } from "@/api/hospital";
import type { HospitalDetail } from "@/api/hospital/type";
import type {DetailState} from "./interface";
import type { HosPitalDetail, DeparmentResponseData, DeparmentArr } from '@/api/hospital/type';
// 选择式API
const useDetailStore = defineStore('Detail',{
    state: (): DetailState => {
        return{
            //医院详情的数据
            // hospitalInfo:({} as HospitalDetail),
            hospitalInfo: ({} as HosPitalDetail),
            //存储医院科室数据
            deparmentArr:[],
        }
    },
    actions:{
        async getHospital(hoscode:string){
            let result : HospitalDetail =await reqHospitalDetail(hoscode)
            if (result.code == 200){
                this.hospitalInfo = result.data;
            }
            console.log("hoscode",hoscode)
        },
        // 获取某一个医院科室的数据
        async getDepartment(hoscode){
            let result : DeparmentResponseData =await reqHospitalDeparment(hoscode)
            //存储数据
            if(result.code == 200){
                this.deparmentArr = result.data;
            }

        }
    },
    getters:{

    },
});
// 获取仓库的方法暴露
export default useDetailStore;