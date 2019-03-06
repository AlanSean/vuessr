const fs = require('fs');
const { resolve } = require('path');
const express = require('express');
const app = express();
const proxy = require('./proxy');
const { createBundleRenderer } = require('vue-server-renderer')
const pathDir = process.env.NODE_ENV === 'development' ? '../distDev' : '../dist';
//模板地址
const templatePath = resolve(__dirname, '../public/index.nodeTempalte.html')
//客户端渲染清单
const clientManifest = require(pathDir+'/vue-ssr-client-manifest.json')
//服务端渲染清单
const bundle = require(pathDir+'/vue-ssr-server-bundle.json')
//读取模板
const template = fs.readFileSync(templatePath, 'utf-8')
const renderer = createBundleRenderer(bundle,{
    template,
    clientManifest,
    runInNewContext: false
})
//代理相关
proxy(app);
//请求静态资源相关配置
app.use('/js', express.static(resolve(__dirname, pathDir+'/js')))
app.use('/css', express.static(resolve(__dirname, pathDir+'/css')))
app.use('/font', express.static(resolve(__dirname, pathDir+'/font')))
app.use('/img', express.static(resolve(__dirname, pathDir+'/img')))
app.use('*.ico', express.static(resolve(__dirname, pathDir)))


//路由请求
app.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    //传入路由 src/entry/server.js会接收到  使用vueRouter实例进行push
    const context = {
        url: req.url
    }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.url) {
                res.redirect(err.url)
            } else {
                res.status(500).end('500 | 服务器错误');
                console.error(`${req.url}: 渲染错误 `);
                console.error(err.stack)
            }
        }
        res.status(context.HTTPStatus || 200)
        res.send(html)
    })
})
module.exports = app;
