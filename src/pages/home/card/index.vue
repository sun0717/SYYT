<template>
    <el-card class="box-card" shadow="hover" @click="goDetail">
        <div class="content">
            <div class="left">
                <div class="hospital_name">
                    {{ hospitalInfo.hosname }}
                </div>
                <div class="tip">
                    <div class="level">
                        <svg t="1691756272356" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4041" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="4042"></path></svg>
                        <span>{{ hospitalInfo.param.hostypeString }}</span>
                    </div>
                    <div class="time">
                        <svg t="1691756399542" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7245" width="16" height="16"><path d="M779.15 882h-534.3A98 98 0 0 1 147 784.15v-534.3A98 98 0 0 1 244.85 152h534.3A98 98 0 0 1 877 249.85v534.3A98 98 0 0 1 779.15 882z m-534.3-709.72a77.66 77.66 0 0 0-77.57 77.57v534.3a77.66 77.66 0 0 0 77.57 77.57h534.3a77.66 77.66 0 0 0 77.57-77.57v-534.3a77.66 77.66 0 0 0-77.57-77.57z" p-id="7246"></path><path d="M511.21 273.61a10.14 10.14 0 0 1-10.14-10.14V202a10.14 10.14 0 0 1 20.28 0v61.51a10.14 10.14 0 0 1-10.14 10.1zM258.47 527.93H197a10.14 10.14 0 0 1 0-20.28h61.51a10.14 10.14 0 0 1 0 20.28zM512.79 842.18A10.14 10.14 0 0 1 502.65 832v-61.47a10.14 10.14 0 0 1 20.28 0V832a10.14 10.14 0 0 1-10.14 10.18zM827 526.35h-61.47a10.14 10.14 0 1 1 0-20.28H827a10.14 10.14 0 0 1 0 20.28z" p-id="7247"></path><path d="M358.57 251.08m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7248"></path><path d="M246.16 363.42m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7249"></path><path d="M246.08 670.43m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7250"></path><path d="M358.42 782.84m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7251"></path><path d="M665.43 782.92m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7252"></path><path d="M777.84 670.58m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7253"></path><path d="M777.92 363.57m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7254"></path><path d="M665.58 251.16m-17.74 0a17.74 17.74 0 1 0 35.48 0 17.74 17.74 0 1 0-35.48 0Z" p-id="7255"></path><path d="M715.59 484.84A32 32 0 0 0 683.93 458a32.88 32.88 0 0 0-5.24 0.43L509.52 486.3a31.91 31.91 0 0 0-3.86 0.9L389.47 284.43a10.14 10.14 0 1 0-17.59 10.08L489 498.87a32.09 32.09 0 0 0 31 50.79l169.17-27.91a32.14 32.14 0 0 0 26.42-36.91zM492.33 495z m193.51 6.71l-169.17 27.94a11.81 11.81 0 0 1-5.06-0.26 11.83 11.83 0 0 1 1.21-23.08L682 478.4a11.63 11.63 0 0 1 1.94-0.16 11.83 11.83 0 0 1 1.91 23.5z" p-id="7256"></path></svg>
                        <span>每天{{ hospitalInfo.bookingRule.releaseTime }}放号</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
// 获取路由对象
let router = useRouter()

// 点击医院卡片的时候跳转到医院详情页面
const goDetail = () => {
    // console.log(props.hospitalInfo)
    // router.push({
    //     path: '/hospital/register',
    //     query: {
    //         hoscode: 
    //     }
    // })
    router.push({
        path: '/hospital/register',
        query: {
            hoscode: props.hospitalInfo.hoscode
        }
    })
}

// 接收父组件传递过来的props->即为医院已有的数据
let props = defineProps(['hospitalInfo'])


</script>

<style scoped lang="scss">
.content {
    display: flex;
    justify-content: space-between;

    .left {
        width: 60%;

        .tip {
            color: #7f7f7f;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            .level {
                display: flex;
                align-items: center;

                span {
                    color: red;
                    font-size: 16px;
                    margin-left: 5px;
                }
            }
            .time{  
                display: flex;
                align-items: center;

                span {
                    color: red;
                    font-size: 16px;
                    margin-left: 10px;
                }
            }
        }
    }

    .right {
        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>