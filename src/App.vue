<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
    html,body,#app,#app>*{
        width: 100%;
        height: 100%;
    }
    body{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 16px;
        margin: 0;
        overflow-x: hidden;
    }

    img{
        width: 200px;
    }
</style>
