const proxy = require('http-proxy-middleware');

function proxyConfig(obj){
    return {
        target:'http://localhost:8081',
        changeOrigin:true,
        ...obj
    }
}
module.exports = (app) => {
    app.post('/cms/i1/user_info',( req, res ) => {
        res.send({
            data: 'hello'
        })
    })
};
