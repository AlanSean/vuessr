import Vue from 'vue';
Vue.mixin({
    beforeMount() {
        const {
            asyncData
        } = this.$options
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            })
        }
    }
})
