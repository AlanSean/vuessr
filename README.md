[过程文章](https://segmentfault.com/u/jingqiaoqiao_5b03e1a25b83f/articles)

# vuessr

#### 本地
    npm run start
#### 编译
    npm run build
#### node服务
    npm run start:server
#### 服务器端命令
    npm run pm2

注意事项，代码要写到mounted,created时运行环境基本在node


目录结构
```
|-- vuessr
    |-- .gitignore
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- vue.config.js
    ├── bin // 开发环境启动脚本
    |  ├── index.js
    |  └── 热更新思路
    |-- dist //生产环境的打包目录
    |-- distDev //开发环境的打包目录
    |-- nodeScript //node 渲染配置
    |   |-- index.js
    |   |-- proxy.js
    |   |-- server.js
    |-- public//模板文件
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- index.nodeTempalte.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- router.config.js //路由集合
        |-- store.config.js //vuex 集合
        |-- assets//全局静态资源源码
        |   |-- 备注.txt
        |   |-- img
        |       |-- logo.png
        |-- components//全局组件
        |   |-- Head
        |       |-- index.js
        |       |-- index.scss
        |       |-- index.vue
        |       |-- img
        |           |-- logo.png
        |-- entry//cli3入口
        |   |-- client.js
        |   |-- server.js
        |   |-- 备注.txt
        |-- methods//公共方法
        |   |-- 备注.txt
        |   |-- mixin
        |       |-- index.js
        |-- pages//源码目录
        |   |-- home
        |   |   |-- index.js
        |   |   |-- index.scss
        |   |   |-- index.vue
        |   |   |-- img
        |   |   |   |-- flow.png
        |   |   |   |-- head_portrait.jpg
        |   |   |   |-- logo.png
        |   |   |   |-- vuessr.png
        |   |   |-- vue
        |   |   |   |-- index.js
        |   |   |   |-- index.scss
        |   |   |   |-- index.vue
        |   |   |-- vueCli3
        |   |   |   |-- index.js
        |   |   |   |-- index.scss
        |   |   |   |-- index.vue
        |   |   |-- vueSSR
        |   |   |   |-- index.js
        |   |   |   |-- index.scss
        |   |   |   |-- index.vue
        |   |   |-- vuex
        |   |       |-- index.js
        |   |       |-- index.scss
        |   |       |-- index.vue
        |   |-- router//路由配置
        |   |   |-- index.js
        |   |-- store//vuex配置
        |       |-- all.js
        |-- static//cdn资源
            |-- 备注.txt

```
    文件模板  ps:比较简单的文件初始化cli
        git clone https://github.com/AlanSean/cli-config.git
        cd cli-config
        npm link
        tem init  文件名




### 结语
    这个方式的服务端渲染，很麻烦（开发时要不断的等待重新构建，比较浪费时间）。
    所以nuxt 真香。
