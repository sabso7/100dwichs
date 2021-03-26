import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorie: null,
    isLoading: false,
    photos: null,
    addPhoto: null,
    imgsArr: [],
    token: localStorage.getItem('user-token') || '',
    isAuth: localStorage.getItem('is-auth') || false
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
      photos.forEach(function(value){
        
        state.imgsArr.push(
          {
            "src": "https://dodie-api.site/photos/" + value.filePath,
            "title": "This is first img title",
            "id": value.id
          }
        )
      })
      state.isLoading = false;
    },
    setAddPhoto(state, addPhoto){
      state.addPhoto = addPhoto;
      state.isLoading = false;
    },
    setAuth(state,value){
      state.isAuth = value;
      state.isLoading = false;
    }
  },
  actions: {
    async getCategorie({commit}) {
      commit("setIsLoading");
      const categorie = await api.getCategories();
      commit("setCategorie", categorie);
    },

    async getPhotos({commit},data) {
      commit("setIsLoading");
      const photos = await api.getPhotos(data);
      commit("setPhotos", photos );
    },

    async addPhoto({commit},data) {
      commit("setIsLoading");
      await api.addPhoto(data);
    },

    async login({commit},data) {
      commit("setIsLoading");
      await api.login(data);
      commit("setAuth",localStorage.getItem('is-auth'));
    },

    async logout({commit}){
      commit("setIsLoading");
      localStorage.removeItem('user-token');
      localStorage.removeItem('is-auth');
      commit("setAuth",localStorage.getItem('is-auth'));
    }

  },
  modules: {
  }
})
