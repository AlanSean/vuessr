//

/**
 *
 * @method pagesEntry 路由模块入口
 * @param  {string} name 要引入的文件地址
 * @return {Promise}
 */
function pagesEntry (name = 'HelloWorld'){
    return () => import('../'+name+'/index.vue');
}
export default [
    {
        path: '/home',
        component: pagesEntry()
    }
]
