//store总配置
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
//由于browserSync.js代理了8080，所以域名要用3000的。仅开发环境有效。
const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://adm.hqboke.cn';
console.log(host)
function fetchItem(id){
    //该函数是运行在node环境 所以需要加上域名
    return axios.post(host+'/cms/i1/user_info');
}
export function createStore() {
    return new Vuex.Store({
        state:{
            items:{}
        },
        actions: {
            fetchItem ({commit}, id) {
                return fetchItem(id).then(item => {
                    commit('setItem',{id, item})
                })
            }
        },
        mutations: {
            setItem(state, {id, item}){
                Vue.set(state.items, id, item.data)
            }
        }
    })
}
