export default {
    name: "vueSSR",
    asyncData({
        store,
        route
    }) {
        // 触发 action 后，会返回 Promise
        return store.dispatch('fetchItem', route.path)
    },
    computed: {
        // 从 store 的 state 对象中的获取 item。
        item() {
            return this.$store.state.items[this.$route.path]
        }
    },
    data: () => ({

    })
}
