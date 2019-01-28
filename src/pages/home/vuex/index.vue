<template>
  <div class="vuex">
     <a href="https://vuex.vuejs.org/zh/" target="_blank">
         <img src="https://vuex.vuejs.org/flow.png" alt="vuex">
     </a>
     <h1> Vuex 是什么？</h1>
     <p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。</p>
  </div>
</template>
<script>
import vuex from './index';
export default vuex
</script>
<style lang="scss" scoped>
    @import './index';
</style>
