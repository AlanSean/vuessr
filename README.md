# vuessr
#### 启动
    npm run serve
#### 打包
    npm run build

#### node服务
    //暂时没有任何用处
    npm run start:server

    文件创建规范
        模块,组件
            assets/
                img/
                css/
                js/
            components/
                Head/
                    img/
                    index.js
                    index.scss
                    index.vue

            pages/
                HelloWorld/
                    img/
                    index.js
                    index.scss
                    index.vue

            router
                index.js
            static/
                css/
                js/

    文件模板  ps:比较简单的文件初始化cli
        git clone https://github.com/AlanSean/cli-config.git
        cd cli-config
        npm link
        tem init  文件名
