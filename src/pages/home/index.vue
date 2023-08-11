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
                <!-- 展示医院的结构 -->
                <div class="hospital">
                    <Card class="item" v-for="item in 10" :key="item" />
                    <!-- 分页器 -->
                </div>
                <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
                    :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="13"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
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
// 引入医院信息卡片的组件
import Card from '@/pages/home/card/index.vue'

// 分页器需要的数据
import { ref } from 'vue';
// 分页器页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>();

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