/**
 *
 * @method componentPath 路由模块入口
 * @param  {string} name 要引入的文件地址
 * @return {Object}
 */
function componentPath (name = 'home'){
    return {
        component:() => import(`../${name}/index.vue`)
    }
}

export default [
    {
        path: '/home',
        ...componentPath(),
        children: [
            {
                path: "vue",
                name: "vue",
                ...componentPath('home/vue')
            },
            {
                path: "vuex",
                name: "vuex",
                ...componentPath('home/vuex')
            },
            {
                path: "vueCli3",
                name: "vueCli3",
                ...componentPath('home/vueCli3')
            },
            {
                path: "vueSSR",
                name: "vueSSR",
                ...componentPath('home/vueSSR')
            }
        ]

    }
]
