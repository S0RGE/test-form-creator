import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getFormConfig } from "@/api";
import { IForm } from "@/api/types";
import { getDataFromLocalStorage, setDataToLocalStorage } from "@/helpers";

export default new Vuex.Store({
  state: {
    formConfig: {} as IForm,
    newFormConfig: {} as IForm,
    isLoading: false,
    haveNewForm: false,
  },
  mutations: {
    setLoading(state, payload: boolean) {
      state.isLoading = payload;
    },
    setHaveNewForm(state, payload: boolean) {
      state.haveNewForm = payload;
    },
    setFormConfig(state, formConfig: IForm) {
      state.formConfig = formConfig;
    },
    setNewFormConfig(state, formConfig: IForm) {
      state.newFormConfig = formConfig;
    },
  },
  actions: {
    setLoading(context, payload) {
      context.commit("setLoading", payload);
    },
    async getFormConfig({ commit, state }) {
      const formConfig = await getFormConfig();

      if (state.formConfig.name && formConfig.name !== state.formConfig.name) {
        commit("setNewFormConfig", formConfig);
        commit("setHaveNewForm", true);
        return;
      }

      setTimeout(async () => {
        this.dispatch("getFormConfig");
      }, 10000);

      setDataToLocalStorage("mainConfig", formConfig);
      commit("setFormConfig", formConfig);
    },
    setNewFormConfig({ commit, state }) {
      commit("setFormConfig", state.newFormConfig);
      commit("setHaveNewForm", false);

      setDataToLocalStorage("mainConfig", state.newFormConfig);
      setTimeout(async () => {
        this.dispatch("getFormConfig");
      }, 10000);
    },
  },
  getters: {
    currentFormConfig(state) {
      if (state.formConfig.name) {
        return state.formConfig;
      }
      const config = getDataFromLocalStorage("mainConfig");
      console.log("🚀 ~ currentFormConfig ~ config:", config);
      if (config) {
        state.formConfig = config as IForm;
        return state.formConfig;
      }
      return null;
    },
  },
});
