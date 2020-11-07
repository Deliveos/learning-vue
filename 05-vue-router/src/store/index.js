import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: "Hello Vuex"
    },
    mutations: {
        setMessage (state, payload) {
            state.message = payload
        }
    },
    actions: {
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {
        getMessage (state) {
            return state.message
        }
    }
})