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
                <Level />
                <!-- 地区子组件 -->
                <Region />
            </el-col>
            <el-col :span="4">456</el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from '@/components/carousel/index.vue'
// 引入首页搜索的组件
import Search from '@/components/search/index.vue'
// 引入首页等级的组件
import Level from '@/components/level/index.vue'
// 引入首页地区选择的组件
import Region from '@/components/region/index.vue'
</script>

<style scoped lang="scss">
</style>