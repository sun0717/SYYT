// 统一管理首页模块接口
import httpInstance from "@/utils/http";
import type { HospitalResponseData, HospitalLevelAndRegionResponseData } from './type'
// 通过枚举管理首页模块的接口地址
enum API {
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL='/hosp/hospital/',
    // 获取医院的等级与地区接口
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/'
}

export const hospitalAPI = (page: number, limit: number) => {
    return httpInstance<any, HospitalResponseData>({
        url: API.HOSPITAL_URL + `${page}/${limit}`
    })
}

export const hospitalLevelAndRegionAPI = (dictCode: string) => {
    return httpInstance<any, HospitalLevelAndRegionResponseData>({
        url: API.HOSPITALLEVELANDREGION_URL + `${dictCode}`
    })
}