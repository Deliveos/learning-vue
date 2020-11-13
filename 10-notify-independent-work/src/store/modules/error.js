export default {
  state: {
    error: {
      text: null,
    },
  },
  mutations: {
    setErrorText(state, payload) {
      state.error.text = payload;
    },
  },
  actions: {
    setErrorText({ commit }, payload) {
      commit('setErrorText', payload);
    },
  },
  getters: {
    getError(state) {
      return state.error;
    },
  },
};
