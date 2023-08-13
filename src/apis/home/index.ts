// 统一管理首页模块接口
import httpInstance from "@/utils/http";
import type { HospitalResponseData, HospitalLevelAndRegionResponseData, HospitalInfo } from './type'
// 通过枚举管理首页模块的接口地址
enum API {
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL='/hosp/hospital/',
    // 获取医院的等级与地区接口
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/',
    // 根据关键字医院的名字获取数据
    HOSPITALINFO_URL='/hosp/hospital/findByHosname/'
}

export const hospitalAPI = (page: number, limit: number, hostype='', districtCode='') => {
    return httpInstance<any, HospitalResponseData>({
        url: API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
    })
}

export const hospitalLevelAndRegionAPI = (dictCode: string) => {
    return httpInstance<any, HospitalLevelAndRegionResponseData>({
        url: API.HOSPITALLEVELANDREGION_URL + `${dictCode}`
    })
}

export const hospitalInfoAPI = (hosname: string) => {
    return httpInstance<any, HospitalInfo>({
        url: API.HOSPITALINFO_URL + `${hosname}`
    })
}