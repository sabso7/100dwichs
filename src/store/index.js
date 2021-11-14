import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorie: null,
    sousCategorie: null,
    isLoading: false,
    photos: null,
    imgsArr: [],
    token: localStorage.getItem('user-token') || '',
    isAuth: localStorage.getItem('is-auth') || false,
    error: null,
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
      state.imgsArr = [];
      photos.forEach(function(value){
        state.imgsArr.push(
          {
            "src": "https://sabso-api.xyz/photos/" + value.filePath,
            "description": value.description,
            "id": value.id,
          }
        )
      })
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
    setSousCategorie(state, sousCategorie){
      state.sousCategorie = sousCategorie;
      state.isLoading = false;
    },
  },
  actions: {
    
    async getPhotos({commit},data) {
      commit("setIsLoading");
      const photos = await api.getPhotos(data);
      commit("setPhotos", photos);
    },

    async addPhoto({commit, dispatch},data) {
      commit("setIsLoading");
      if(data.file.size > (8000000)){
        commit("setError", 'Fichier trop volumineux !');
      }else{
        commit("setError", null);
        await api.addPhoto(data);
        dispatch('getPhotos',data.sousCateg);
      }
    },

    async deletePhoto({commit, dispatch},data) {
      commit("setIsLoading");
      console.log(data);
      await api.deletePhoto(data.id);
      dispatch('getPhotos',data.idSousCateg);
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
    },

    async createSousCateg({commit},data) {
      commit("setIsLoading");
      await api.createSousCateg(data);
    },

    async deleteSousCateg({commit},data) {
      commit("setIsLoading");
      await api.deleteSousCateg(data);
    },

    async getSousCategorie({commit},data) {
      commit("setIsLoading");
      const sousCategorie = await api.getSousCategorie(data);
      commit("setSousCategorie", sousCategorie);
    },

    async getCategorie({commit}) {
      commit("setIsLoading");
      const categorie = await api.getCategories();
      commit("setCategorie", categorie);
    },

    async createCateg({commit, dispatch},data) {
      commit("setIsLoading");
      await api.createCateg(data);
      dispatch('getCategorie');
    },

    async deleteCateg({commit,dispatch},data) {
      commit("setIsLoading");
      await api.deleteCateg(data);
      dispatch('getCategorie');
    },

  },
})
