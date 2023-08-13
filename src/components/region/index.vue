<template>
    <div class="region">
        <div class="content">
            <div class="left">地区:</div>
            <ul class="">
                <li :class="{ active: activeFlag=='' }" @click="changeRegion('')">全部</li>
                <li v-for="region in regionArr" :key="region.value" @click="changeRegion(region.value)" :class="{ active: activeFlag == region.value}">{{ region.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { hospitalLevelAndRegionAPI } from '@/apis/home'
import { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/apis/home/type'
import { ref, onMounted } from 'vue'
// 存储地区的数据
const regionArr = ref<HospitalLevelAndRegionArr>([])
// 地区高亮的响应式数据
let activeFlag = ref<string>('')
// 地区组件挂载完毕获取地区数据
onMounted(() => {
    getRegion()
})
// 获取地区的数据
const getRegion = async () => {
    let result:HospitalLevelAndRegionResponseData = await hospitalLevelAndRegionAPI("Beijin")
    if (result.code === 200) {
        regionArr.value = result.data
    }
}
// 点击地区的按钮回调
const changeRegion = (region: string) => {
    // 高亮响应式数据存储level数值
    activeFlag.value = region
    $emit('getRegion', region)
}

let $emit = defineEmits([`getRegion`])
</script>

<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-top: 10px;

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            width: 38px;
        }
        ul {
            display: flex;
            // 默认换行
            flex-wrap: wrap;
            
            li {
                margin-right: 10px;
                margin-bottom: 10px;

                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                color: #55a6fe;
                cursor: pointer;
            }
        }
    }
}
</style>