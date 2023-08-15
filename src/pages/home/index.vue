<template>
    <div>
        <!-- 首页轮播图的结构 -->
        <Carousel />
        <!-- 首页搜索医院的表单区域 -->
        <Search />
        <!-- 底部展示医院的结构 -->
        <el-row>
            <el-col :span="20">
                <!-- 等级子组件 -->
                <Level @getLevel="getLevel"/>
                <!-- 地区子组件 -->
                <Region @getRegion="getRegion"/>
                <!-- 展示医院的结构 -->
                <div class="hospital" v-if="hospitals.length > 0">
                    <Card class="item" v-for="(item, index) in hospitals" :key="index" :hospitalInfo="item"/>
                </div>
                <el-empty v-else description="没有找到,>~5~o~5~<" />
                <!-- 分页器 -->
                <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
                    :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total"
                    @size-change="sizeChange" @current-change="currentChange" />
            </el-col>
            <el-col :span="4">
                <Tip />
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 引入首页轮播图组件
import Carousel from '@/components/carousel/index.vue'
// 引入首页搜索的组件
import Search from '@/components/search/index.vue'
// 引入首页等级的组件
import Level from '@/components/level/index.vue'
// 引入首页地区选择的组件
import Region from '@/components/region/index.vue'
// 引入医院信息卡片的组件
import Card from '@/pages/home/card/index.vue'
// 引入右侧组件
import Tip from '@/components/tip/index.vue'
import type { Content, HospitalResponseData } from '@/apis/home/type'
// 引入请求
import { hospitalAPI } from '@/apis/home'
// 分页器需要的数据
// 分页器页码
let pageNo = ref<number>(1)
// 一页展示几条数据
let pageSize = ref<number>(10)
let hospitals = ref<Content>([])
// 存储医院总个数
let total = ref<number>(0)
// 存储医院的等级响应数据
let hosType = ref<string>('')
// 存储医院的地区
let districtCode = ref<string>('')
const getHospital = async () => {
    const res: HospitalResponseData = await hospitalAPI(pageNo.value, pageSize.value, hosType.value, districtCode.value)
    if (res.code === 200) {
        hospitals.value =  res.data.content
        // 存储医院的总个数
        total.value = res.data.totalElements
    }
}

// 分页器页码发生变化时侯变化
const currentChange = () => {
    getHospital()
}

// 分页器下拉菜单发生变化时候变化
const sizeChange = () => {
    // 当前页码归第一页
    pageNo.value = 1
    getHospital()
}
onMounted(() => {
    getHospital()
})

// 子组件自定义事件
const getLevel = (level:string) => {
    // 收集参数：等级参数
    hosType.value = level
    // 再次发请求
    getHospital()
}

const getRegion = (region:string) => {
    // 收集参数：等级参数
    districtCode.value = region
    // 再次发请求
    getHospital()
}


</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin: 10px 0px;
    }
}
</style>