const all = {
    //开启命名空间
    namespaced: true,
    //ssr注意事项 state 必须为函数
    state: () => ({
        count:0
    }),
    mutations: {
        inc: state => state.count++
    },
    actions: {
        inc: ({ commit }) => commit('inc')
    }
}
export default all;
