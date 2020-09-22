import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorie: null,
    isLoading: false,
    photos: null
  },
  mutations: {
    setCategorie(state, categorie){
      state.categorie = categorie;
      state.isLoading = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setPhotos(state, photos){
      state.photos = photos;
      state.isLoading = false;
    },
  },
  actions: {
    async getCategorie({commit}) {
      commit("setIsLoading");
      const categorie = await api.getCategories();
      commit("setCategorie", categorie);
    },

    async getPhotos({commit},data) {
      commit("setIsLoading");
      const sousCat = await api.getSouscategorieById(data);
      const photos = sousCat.photos;
      commit("setPhotos", photos );
    },

    async addPhoto({commit}) {
      commit("setIsLoading");
      const categorie = await api.addPhoto();
      commit("setCategorie", categorie);
    }

  },
  modules: {
  }
})
