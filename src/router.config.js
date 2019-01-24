//路由总配置
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import router from './pages/router';

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: "*",
                redirect: '/home/vue'
            },
            ...router
        ]
    })
}
