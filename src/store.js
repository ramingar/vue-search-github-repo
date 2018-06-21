import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        repos: []
    },

    mutations: {
        setResults: (state, results) => {
            state.repos = [];
            results.repos.forEach(val => state.repos.push(val));
        }
    },

    actions: {
        search: ({commit}, {textToLookFor}) => {
            axios
                .get(`https://api.github.com/search/repositories?q=${textToLookFor}&page=1&per_page=10&sort=stars&order=desc`)
                .then((response) => {
                    commit('setResults', {repos: response.data.items})
                })
                .catch(() => {
                    commit('setResults', {repos: []})
                });
        }
    },

    getters: {
        repos: (state) => {
            return state.repos;
        }
    }
})