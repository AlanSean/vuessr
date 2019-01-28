//store总配置
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import vuexMap from './pages/store';
function fetchItem(id){
    return new Promise(function(resolve, reject) {
        resolve(id)
    });
}
export function createStore() {
    return new Vuex.Store({
        ...vuexMap,
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
                Vue.set(state.items, id, item)
            }
        }
    })
}
