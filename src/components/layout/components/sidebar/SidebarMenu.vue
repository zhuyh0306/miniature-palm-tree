<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :collapse="$store.getters.isShowSidebarFlg"
    :background-color="$store.getters?.cssVar?.menuBg || 'rgb(0, 21, 40)'"
    :text-color="$store.getters.cssVar?.menuText"
    :active-text-color="$store.getters.cssVar?.menuActiveText || 'red'"
    :unique-opened="true"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import SidebarItem from './SidebarItem'
import { useRoute } from 'vue-router'
import { generateMenus } from '@/utils/route'
import { useStore } from 'vuex'
// 计算路由表结构
// const router = useRouter()
const store = useStore()
const routes = computed(() => {
  const filterRoutes = store.state.permission.routes
  return generateMenus(filterRoutes)
})

// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss" scoped></style>
