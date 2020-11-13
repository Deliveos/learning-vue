import loadMore from '../../assets/js/loadMore';
import axios from 'axios';

export default {
  state: {
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload;
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload;
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload];
    },
  },
  actions: {
    setMessage({ commit }, payload) {
      commit('setMessage', payload);
    },
    setMessageMain({ commit }, payload) {
      commit('setMessageMain', payload);
    },
    loadMessages({ commit, getters }) {
      let res = getters.getMessageFilter;
      commit('loadMessages', loadMore(res));
    },
    getNotify({ commit }) {
      axios
        .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
        .then(response => {
          let messages = [],
            messagesMain = [],
            data = response.data.notify;
          for (let i = 0; i < data.length; i++) {
            if (data[i].main) messagesMain.push(data[i]);
            else {
              messages.push(data[i]);
            }
          }
          this.dispatch('setMessage', messages);
          this.dispatch('setMessageMain', messagesMain);
          this.dispatch('setErrorText', null);
        })
        .catch(err => {
          console.error(err);
          this.dispatch('setErrorText', err);
        })
        .finally(() => {
          this.dispatch('setIsLoading', false);
        });
    },
    getNotifyLazy({ commit }) {
      this.dispatch('setIsLoading', true);
      setTimeout(() => {
        this.dispatch('getNotify');
      }, 2000);
    },
  },
  getters: {
    getMessage(state) {
      return state.messages;
    },
    getMessageFilter(state) {
      return state.messages.filter(mes => {
        return mes.main === false;
      });
    },
    getMessageMain(state) {
      return state.messagesMain;
    },
  },
};
