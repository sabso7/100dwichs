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
    addPhoto: null,
    imgsArr: [],
    token: localStorage.getItem('user-token') || '',
    isAuth: localStorage.getItem('is-auth') || false,
    error: null,
    refresh: 0,
    arrayImgReport: [],
    arrayImgPort: []
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
            "description": value.description,
            "id": value.id,
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
    setImgHome(state,{img,nomCategorie}){
      (nomCategorie === 'Reportages') ? state.arrayImgReport.push(img):state.arrayImgPort.push(img);
    },
    refresh(state){
      state.refresh += 1;
    },
    setSousCategorie(state, sousCategorie){
      state.sousCategorie = sousCategorie;
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
      const photos = await api.getPhotos(data);
      commit("setPhotos", photos);
    },

    async addPhoto({commit},data) {
      commit("setIsLoading");
      if(data.file.size > (8000000)){
        commit("setError", 'Fichier trop volumineux !');
      }else{
        commit("setError", null);
        await api.addPhoto(data);
      }
      commit("refresh");
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

    async deletePhoto({commit},data) {
      commit("setIsLoading");
      await api.deletePhoto(data);
      commit("refresh");
      commit("setOffLoading");
    },

    async getPhotosHomePage({commit},categorie) {
      categorie.forEach(element1 => {
            element1.sousCategories.forEach(element2 => {
                let photos = (!element2.photos.length) ? "@/assets/img/no_image.jpeg" : "https://dodie-api.site/photos/" + element2.photos[0].filePath
                let img = {
                  "nomSousCateg": element2.nomSouscategorie,
                  "photo": photos,
                  "id": element2.id
                }
                let nomCategorie = element1.nomCategorie;
                commit("setImgHome", {img,nomCategorie});
            });
      });
    },

    async createSousCateg({commit},data) {
      commit("setIsLoading");
      await api.createSousCateg(data);
      commit("setOffLoading");
      commit("refresh");
    },

    async deleteSousCateg({commit},data) {
      commit("setIsLoading");
      await api.deleteSousCateg(data).then(() => {
        commit("refresh");
      });
      commit("setOffLoading");
    },

    async getSousCategorie({commit},data) {
      commit("setIsLoading");
      const sousCategorie = await api.getSousCategorie(data);
      commit("setSousCategorie", sousCategorie);
    },

  },
})
