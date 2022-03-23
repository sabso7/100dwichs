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
    listUser: null,
    error: null,
    counterCateg: 0,
    counterUser: 0
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
    setListUser(state, listUser){
      state.listUser = listUser;
      state.isLoading = false;
    },
    setCounterCateg(state, count){
      state.counterCateg = count;
      state.isLoading = false;
    },
    setCounterUser(state, count){
      state.counterUser = count;
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

    async createSousCateg({commit, dispatch},data) {
      commit("setIsLoading");
      await api.createSousCateg(data);
      dispatch('getCategorie');
    },

    async deleteSousCateg({commit, dispatch},data) {
      commit("setIsLoading");
      await api.deleteSousCateg(data);
      dispatch('getCategorie');
    },

    async getSousCategorie({commit},data) {
      commit("setIsLoading");
      const sousCategorie = await api.getSousCategorie(data);
      commit("setSousCategorie", sousCategorie);
    },

    async getCategorie({commit}) {
      commit("setIsLoading");
      const categorie = await api.getCategories();
      let counterCateg = 0;
      categorie.forEach(elmt => counterCateg += elmt.sousCategories.length);
      commit("setCounterCateg", counterCateg);
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

    async getListUser({commit}) {
      commit("setIsLoading");
      const listUser = await api.getUser();
      let counterUser = listUser.length;
      commit("setCounterUser", counterUser);
      commit("setListUser", listUser);
    },

    async deleteUser({commit,dispatch},data) {
      commit("setIsLoading");
      await api.deleteUser(data);
      dispatch("getListUser");
    },

    async createUser({commit, dispatch},data) {
      commit("setIsLoading");
      await api.createUser(data).then(setTimeout(() => dispatch("login",data), 3500)).then(dispatch("getCategorie"));
      
    },

  },
})
