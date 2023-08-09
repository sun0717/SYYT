<template>
    <div>
        <!-- 首页轮播图的结构 -->
        <Carousel />
        <!-- 首页搜索医院的表单区域 -->
        <Search />
    </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from '@/components/carousel/index.vue'
import Search from '@/components/search/index.vue'
import { onMounted, ref } from 'vue'
</script>

<style scoped lang="scss"></style>