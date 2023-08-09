<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <RouterView />
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    height: 700px;
    margin-top: 70px;
  }

}
</style>