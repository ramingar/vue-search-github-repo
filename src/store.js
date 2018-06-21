import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        repos: [
            {name: 'repo1', url: 'url1'},
            {name: 'repo2', url: 'url2'},
            {name: 'repo3', url: 'url3'}
        ]
    },

    mutations: {},

    actions: {},

    getters: {
        repos: (state) => {
            return state.repos;
        }
    }
})