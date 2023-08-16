import { defineStore } from "pinia"
import { reqHospitalDetail } from "@/apis/hospital"
import { ref } from 'vue'
// 引入详情数据的ts类型
import type { HospitalDetail } from "@/apis/hospital/type"
export const useDetailStore = defineStore("Detail", () => {
    // 1. 定义state - DetailList
    const DetailList = ref({})
    const getHospital = async (hoscode: string) => {
        let result: HospitalDetail = await reqHospitalDetail(hoscode)
        DetailList.value = result.data
    }
}) 