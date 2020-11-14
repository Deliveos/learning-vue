import Vue from "vue";
import Vuex from "vuex";
import axois from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isUser: true,
    },
    repos: null,
    error: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setRepos(state, payload) {
      state.repos = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    setInfo({ commit }, payload) {
      axois
        .get(`https://api.github.com/users/${payload}`)
        .then((response) => {
          commit("setError", null);
          commit("setUser", response.data);
        })
        .catch((error) => {
          commit("setUser", { isUser: true });
          commit("setError", "Can't find this user");
        });
      axois
        .get(`https://api.github.com/users/${payload}/repos`)
        .then((response) => {
          commit("setError", null);
          commit("setRepos", response.data);
        })
        .catch((error) => {
          console.error(error);
          commit("setRepos", null);
        });
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getRepos(state) {
      return state.repos;
    },
    getError(state) {
      return state.error;
    },
  },
});
