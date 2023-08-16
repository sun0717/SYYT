import httpInstance from '@/utils/http.ts'
import type { HospitalDetail } from './type'
// 枚举请求地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/{hoscode}'
}
// 获取医院详情接口
export const reqHospitalDetail = (hoscode: string) => {
    return httpInstance<any, HospitalDetail>({
        url: API.HOSPITALLEVELANDREGION_URL + `${dictCode}`
    })
}