<!-- 
 -->
<template>
  <div class="main-con">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script setup>
// import { useRoute } from 'vue-router'
// const route = useRoute()
</script>

<style lang="scss" scoped>
.main-con {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - 50px - 43px);
  padding: 104px 20px 20px 20px;
}
</style>
