<template>
    <div class="home">
        <div
            class="menu-button"
            @click="show=true">导航</div>
        <ul
            :class="{'ul-show':show}"
            class="el-menu-demo">
            <router-link
                tag="li"
                v-for="(item,index) in nav"
                :key="index"
                :class="{'is-active':$route.path == item.path}"
                :to="item.path">{{item.name}}</router-link>
            <span @click="show=false">关闭</span>
        </ul>
        <transition name="left">
            <router-view class="center"></router-view>
        </transition>
    </div>
</template>

<script>
import HelloWorld from './index.js';
export default HelloWorld;
</script>

<style scoped lang='scss'>
@import './index.scss';
</style>
