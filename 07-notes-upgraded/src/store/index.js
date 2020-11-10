import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 1,
        nodes: [

        ]
    },
    mutations: {
        addNote (state, payload) { state.nodes.push(payload) },
        removeNote (state, payload) {
            state.nodes.splice(state.nodes.findIndex(function CheckID (currentValue) {
                return currentValue.id === payload
            }), 1)
        },
        incrementId(state) { state.id++ }
    },
    actions: {
        addNote ({commit}, payload) { 
            commit('addNote', payload) 
            commit('incrementId')
        },
        removeNote ({commit}, payload) { commit('removeNote', payload) }
    },
    getters: {
        getNotes (state) { return state.nodes },
        getID (state) {return state.id}
    }
})