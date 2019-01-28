import {
    createApp
} from '../main.js'

export default context => {

    return new Promise((resolve, reject) => {
        const {
            app,
            router,
            store
        } = createApp(context.data)
        //根据node传过来的路由 来调用router路由的指向
        router.push(context.url)

        router.onReady(() => {
            //获取当前路由匹配的组件数组。
            const matchedComponents = router.getMatchedComponents()
            //没有就是没找到该路由
            if (!matchedComponents.length) {
                return reject({
                    code: 404
                })
            }
            //这里是vuex部分
            Promise.all(matchedComponents.map(Component => {

                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    })
                }

            })).then(() => {

                context.state = store.state

                resolve(app)

            }).catch(reject)
        }, reject)
    })
}
