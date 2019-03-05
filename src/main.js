import Vue from 'vue';
Vue.config.productionTip = false;
import VueRouter from 'vue-router';

import App from './App.vue';
import './methods';
import { sync } from 'vuex-router-sync';


import {
    createRouter
} from './router.config.js';

import {
    createStore
} from './store.config.js';

export function createApp() {

    const router = createRouter()
    const store = createStore()
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return { app, router, store };
}
