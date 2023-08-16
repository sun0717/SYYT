<template>
    <div class="hospital">
        <!-- 左侧导航区域 -->
        <div class="menu">
            <div class="top">
                <el-icon><HomeFilled /></el-icon>
                <span> / 医院详情信息</span>
            </div>
            <el-menu default-active="/hospital/register" class="el-menu-vertical-demo" router>
                <el-menu-item index="/hospital/register">
                    <template #title>
                        <el-icon>
                            <Clock />
                        </el-icon>
                        <span>预约挂号</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/hospital/detail">
                    <el-icon><icon-menu /></el-icon>
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item index="/hospital/notice">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>预约须知</span>
                </el-menu-item>
                <el-menu-item index="/hospital/close">
                    <el-icon>
                        <Warning />
                    </el-icon>
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item index="/hospital/search">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧内容展示区域：路由组件展示位置 -->
        <div class="content">
            <!-- 子组件展示结构地方 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
// 左侧菜单需要用到的图标
import {
    Document, Menu as IconMenu, Search, Clock, Warning, HomeFilled
} from '@element-plus/icons-vue'

import { useDetailStore } from '@/store/DetailStore.ts'
import { onMounted } from 'vue' 

onMounted(() => {
    useDetailStore.
})
</script>

<style scoped lang="scss">
.hospital {
    display: flex;

    .menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .top {
        color: #7f7f7f;

    }
    .content {
        flex: 8;
    }
}
</style>