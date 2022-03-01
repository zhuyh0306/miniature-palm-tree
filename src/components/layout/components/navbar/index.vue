<!--  -->
<template>
  <div class="navbar">
    <div class="hamburger-container" @click="toggleClick">
      <svg-icon
        id="guide-hamburger"
        class="hamburger"
        :icon="iconMenu"
      ></svg-icon>
    </div>
    <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />

    <div class="right-menu">
      <guide class="right-menu-item hover-effect" />
      <header-search class="right-menu-item hover-effect"></header-search>
      <screenfull class="right-menu-item hover-effect" />
      <theme-picker class="right-menu-item hover-effect"></theme-picker>
      <lang-select class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40">
            <svg-icon icon="man" className="avator-icon"></svg-icon>
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ '回到首页' }} </el-dropdown-item>
            </router-link>
            <el-dropdown-item @click="changThema">{{
              '切换主题'
            }}</el-dropdown-item>

            <el-dropdown-item divided @click="updateUserInfo">
              修改资料
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">
              {{ '登出' }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import './index.scss'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const changThema = () => {}
const logout = () => {
  store.dispatch('sys/logout')
}
const iconMenu = computed(() => {
  return store.getters.isShowSidebarFlg ? 'menu-open' : 'menu-close'
})
const updateUserInfo = () => {
  router.push({ path: '/user/role' })
}
const toggleClick = () => {
  store.commit('app/updateIsShowSidebarFlg')
}
</script>
<style lang="scss" scoped></style>
