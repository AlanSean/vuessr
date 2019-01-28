import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions } = createNamespacedHelpers('all');
export default {
    name: 'home',
    computed:{
        ...mapState([
            "count"
        ])
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
            this.inc();
        }
    },
    methods: {
      ...mapActions([
          'inc'
      ])
    }
}
