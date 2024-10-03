import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    setLoading(context, payload) {
      context.commit("setLoading", payload);
    },
  },
});
