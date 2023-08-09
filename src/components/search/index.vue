<template>
    <div class="search">
        <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input w-50"
            placeholder="请输入医院的名称" @select="handleSelect" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
// 引入element-plus提供的图标
import { Search } from '@element-plus/icons-vue'
// 深度选择器: 
//     1、原生css >>>
//     2、less    /deep/
//     3、::v-deep 
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