<template>
  <div class="vueSSR">
      <a href="https://ssr.vuejs.org/zh/" target="_blank">
          <img src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png" alt="vuessr">
      </a>
      <h1>什么是服务器端渲染 (SSR)？</h1>
      <p>
          Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。

          服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。
      </p>

  </div>
</template>
<script>
import vueSSR from './index';
export default vueSSR
</script>
<style lang="scss" scoped>
    @import './index';
</style>
