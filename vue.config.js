const ServerPlugin = require('vue-server-renderer/server-plugin'),//生成服务端清单
      ClientPlugin = require('vue-server-renderer/client-plugin'),//生成客户端清单
      nodeExternals = require('webpack-node-externals'),//忽略node_modules文件夹中的所有模块
      VUE_NODE = process.env.VUE_NODE === 'node',
      NODE_ENV = process.env.NODE_ENV === 'development',
      entry = VUE_NODE ? 'server' : 'client';//根据环境变量来指向入口
console.log(NODE_ENV)
module.exports = {
    css: {
        extract: false//关闭提取css,不关闭 node渲染会报错
    },
    devServer:{
        proxy: 'http://localhost:8080'
    },
    outputDir:  NODE_ENV ? 'distDev/' : 'dist/',
    configureWebpack: () => ({
        entry: `./src/entry/${entry}`,
        output: {

            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js',
            libraryTarget: VUE_NODE ? 'commonjs2' : undefined
        },
        target: VUE_NODE  ? 'node' : 'web',
        externals: VUE_NODE ? nodeExternals({
            whitelist: /\.css$/
        }) : undefined,
        plugins: [//根据环境来生成不同的清单。
            VUE_NODE ? new ServerPlugin() : new ClientPlugin()
        ]
    }),
    chainWebpack: config => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
        config.module
            .rule('vue')
                .use('vue-loader')
                    .tap(options => {
                        options.optimizeSSR = false;
                        return options;
                    });
        config.module
            .rule('images')
                .use('url-loader')
                    .tap(options => {
                        options = {
                            limit: 1024,
                            fallback:'file-loader?name=img/[path][name].[ext]'
                        }
                        return options;
                    });
    }
}
