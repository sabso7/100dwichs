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
    isAuth: localStorage.getItem('is-auth') || false,
    error: null,
    refresh: 0
  },
  mutations: {
    setCategorie(state, categorie){
      state.categorie = categorie;
      state.isLoading = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setOffLoading(state){
      state.isLoading = false;
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
    },
    setError(state,value){
      state.error = value;
      state.isLoading = false;
    },
    refresh(state){
      state.refresh += 1;
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
      if(data.file.size > (8000000)){
        commit("setError", 'Fichier trop volumineux !');
      }else{
        commit("setError", null);
        let responseApi = await api.addPhoto(data);
        console.log(responseApi);
      }
      commit("refresh");
    },

    async login({commit},data) {
      commit("setIsLoading");
      let responseApi = await api.login(data);
      console.log(responseApi);
      commit("setAuth",localStorage.getItem('is-auth'));
    },

    async logout({commit}){
      commit("setIsLoading");
      localStorage.removeItem('user-token');
      localStorage.removeItem('is-auth');
      commit("setAuth",localStorage.getItem('is-auth'));
    },

    async deletePhoto({commit},data) {
      commit("setIsLoading");
      await api.deletePhoto(data);
      commit("refresh");
      commit("setOffLoading");
    },

  },
  modules: {
  }
})
