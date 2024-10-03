import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getFormConfig } from "@/api";
import { IForm } from "@/api/types";

export default new Vuex.Store({
  state: {
    formConfig: {} as IForm,
    isLoading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setFormConfig(state, formConfig) {
      state.formConfig = formConfig;
    },
  },
  actions: {
    setLoading(context, payload) {
      context.commit("setLoading", payload);
    },
    async getFormConfig({ commit }) {
      const formConfig = await getFormConfig();
      commit("setFormConfig", formConfig);
    },
  },
});
