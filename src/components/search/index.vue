<template>
    <div class="search">
        <el-autocomplete v-model="hosname" :trigger-on-focus="false" :fetch-suggestions="fetchData" clearable class="inline-input w-50"
            placeholder="请输入医院的名称" @select="goDetail" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
// 深度选择器: 
//     1、原生css >>>
//     2、less    /deep/
//     3、::v-deep 
// 引入element-plus提供的图标
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// 引入请求方法
import { hospitalInfoAPI } from '@/apis/home'
import type { HospitalInfo } from '@/apis/home/type'
const router = useRouter()
// 收集搜索的关键字(医院的名字)
let hosname = ref<string>('')
// 顶部组件的回调
// 收集搜索的关键字(医院的名字)
const fetchData = async (keyword:string, cb:any) => {
    // 当用户输入完关键字后函数会执行一次，发请求获取需要展示的数据即可
    let result:HospitalInfo = await hospitalInfoAPI(keyword)
    // 整理数据，变成element-plus需要的数据格式
    let showData = result.data.map(item => {
        return {
            value: item.hosname, // 展示的医院的名字
            hoscode: item.hoscode // 存储医院的唯一标识符
        }
    })
    cb(showData)
    // hosname.value = result.
}

// 点击某一个推荐项的回调
const goDetail = (item:any) => {
    router.push({
        path: '/hospital',
    })
}
</script>

<style scoped lang="scss">
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px 0px;

    ::v-deep(.el-input__wrapper) {
        width: 600px;

    }
}
</style>