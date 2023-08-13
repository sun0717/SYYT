<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul class="hospital">
                <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
                <li v-for="level in levelArr" :class="{active:activeFlag == level.value}" :key="level.value" @click="changeLevel(level.value)">{{ level.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { hospitalLevelAndRegionAPI } from '@/apis/home'
import { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/apis/home/type'
import { ref, onMounted } from 'vue'
const levelArr = ref<HospitalLevelAndRegionArr>([])
// 控制医院等级高亮响应式数据
let activeFlag = ref<string>('')
// 组件挂载完毕
onMounted(() => {
    getLevel()
})
// 获取医院等级的数据
const getLevel = async () => {
    let result:HospitalLevelAndRegionResponseData = await hospitalLevelAndRegionAPI('HosType')
    if (result.code === 200) {
        levelArr.value = result.data
    }    
}
// 点击等级的按钮回调
const changeLevel = (level: string) => {
    // 高亮响应式数据存储level数值
    activeFlag.value = level
    // 触发自定义事件：将医院等级参数回传给父组件
    $emit('getLevel', level)
}

let $emit = defineEmits([`getLevel`])
</script>

<style scoped lang="scss">
.level {
    color: #7f7f7f;

    h1 {
        font-weight: 900;
        margin: 10px 0px;
    }

    .content {
        display: flex;

        .left {
            margin-right: 10px;
        }

        .hospital {
            display: flex;

            li {
                margin-right: 10px;

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