import http from '@/utils/http';

export function test() {
    return http({
        url: '/hosp/hospital/1/10'
    })
}

