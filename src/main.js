import Vue from 'vue';
Vue.config.productionTip = false;
import VueRouter from 'vue-router';
import App from './App.vue';
import {
    createRouter
} from './router.config.js';


export function createApp() {

    const router = createRouter()

    const app = new Vue({
        router,
        render: h => h(App)
    })
    return { app, router };
}
