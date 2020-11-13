export default {
  state: {
    isLoading: true,
  },
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    setIsLoading({ commit }, payload) {
      commit('setIsLoading', payload);
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
};
