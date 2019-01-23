const proxy = require('http-proxy-middleware');

function proxyConfig(obj){
    return {
        target:'localhost:8081',
        changeOrigin:true,
        ...obj
    }
}
module.exports = (app) => {
    if (process.env.NODE_ENV !== 'production') {
        app.use('/js/main*', proxy(proxyConfig()));
        app.use('/*hot-update*',proxy(proxyConfig()));
        app.use('/sockjs-node',proxy(proxyConfig({ws:true})));
    }
};
