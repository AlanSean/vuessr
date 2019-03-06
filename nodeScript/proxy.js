module.exports = (app) => {
    app.post('/cms/i1/user_info',( req, res ) => {
        res.send({
            data: 'hello'
        })
    })
};
