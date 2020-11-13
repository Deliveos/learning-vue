import Vue from 'vue';
import Vuex from 'vuex';

import notify from './modules/notify';
import error from './modules/error';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notify,
    error,
  },
});
