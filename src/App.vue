<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view> <!-- 使用<router-view>而非直接包含页面组件 -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar, 
  },
}
</script>

<style>
/* 在这里添加全局样式 */
</style>
