import Vue from 'vue';
import Vuex from 'vuex';

import notify from './modules/notify';
import error from './modules/error';
import loading from './modules/loading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notify,
    error,
    loading,
  },
});
