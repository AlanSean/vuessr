import all from '../store/all.js';
export default {
    name: 'home',
    computed:{
        count(){
            return this.$store.state.all.count
        }
    },
    asyncData({ store}){
        store.registerModule('all',all);
        return store.dispatch('all/inc')
    },
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
            if(this.show){
                this.show = false;
            }
            this.$store.dispatch('all/inc');
        }
    },
    mounted() {
        // this.user_info();
    },
    methods: {
        user_info(){
            this.http.post('/cms/i1/user_info').then(res=> {
                console.log(res.data);
            }).catch( error => {
                console.log(error)
            })
        }
    },
    destroyed(){
        this.$store.unregisterModule('all')
    }
}
