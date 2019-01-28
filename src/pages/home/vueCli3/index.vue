<template>
<div class="vueCli3">
    <a href="https://cli.vuejs.org/zh/" target="_blank">
        <img src="https://cn.vuejs.org/images/logo.png" alt="vue">
    </a>
    <h1>Vue CLI 3</h1>
    <p class="description">Vue.js 开发的标准工具</p>
    <p>Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：</p>
    <ul>
        <li>通过 <code>@vue/cli</code> 搭建交互式的项目脚手架。</li>
        <li>通过 <code>@vue/cli</code> + <code>@vue/cli-service-global</code> 快速开始零配置原型开发。</li>
        <li>一个运行时依赖 (<code>@vue/cli-service</code>)，该依赖：
            <ul>
                <li>可升级；</li>
                <li>基于 webpack 构建，并带有合理的默认配置；</li>
                <li>可以通过项目内的配置文件进行配置；</li>
                <li>可以通过插件进行扩展。</li>
            </ul>
        </li>
        <li>一个丰富的官方插件集合，集成了前端生态中最好的工具。</li>
        <li>一套完全图形化的创建和管理 Vue.js 项目的用户界面。</li>
    </ul>
    <p>Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。</p>
</div>
</template>
<script>
import vueCli3 from './index';
export default vueCli3
</script>
<style lang="scss" scoped>
@import './index';
</style>
