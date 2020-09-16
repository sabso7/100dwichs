import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorie: []
  },
  mutations: {
    setCategorie(state, categorie){
      state.categorie = categorie;
    }
  },
  actions: {
    async getCategorie({commit}) {
      const categorie = await api.getCategories();
      commit("setCategorie", categorie);
    }
  },
  modules: {
  }
})
