export default {
    name: 'home',
    data() {
        return {
            activeIndex2: '1',
            show:false,
            nav:[
                {
                    path:'/home/vue',
                    name:'vue'
                },
                {
                    path:'/home/vuex',
                    name:'vue-vuex'
                },
                {
                    path:'/home/vueCli3',
                    name:'vue-cli3'
                },
                {
                    path:'/home/vueSSR',
                    name:'vue ssr'
                }
            ]
        };
    },
    watch:{
        $route:function(){
            this.show = false;
        }
    }
}
