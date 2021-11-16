import axios from "axios";
import jwt_decode from "jwt-decode";

class OnSetApi{
    constructor() {
        const baseURL = "https://sabso-api.xyz"; // https://api.onset-rp.com/
        this.api = axios.create({
          baseURL,
          timeout: 100000,
          headers: {
            accept: "application/json"
          }
        });
    }

    async getCategories() {
        return await this.api
          .get("/api/categories")
          .then(({ data }) => data)
          .catch(error => console.log(error));
    }

    async createCateg(data) {
      return await this.api
        .post("/api/categories",
          {
            nomCategorie: data.nomCateg,
            description: data.description
          },{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }
          })
        .then(({ data }) => {data})
        .catch(error =>{ return error});
    }

    async deleteCateg(id) {
      return await this.api
        .delete("/api/categories/" + id.idCateg,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })  
        .catch(error => console.log(error));
    }

    async deletePhoto(id) {
      return await this.api
        .delete("/api/photos/" + id,{
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })
        .catch(error => console.log(error));
    }

    async login(userData) {
      return await this.api
        .post("/authentication_token",
          {
            'email': userData.emailInput,
            'password': userData.passwordInput
          },{
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(({ data }) => {
          if(data.token){
            localStorage.setItem('user-token', data.token),localStorage.setItem('is-auth', true)
            console.log(data.token);
          }
        })
        .catch(error =>{ return error});
    }

    async getUser(email) {
      return await this.api
        .get("/api/users?email=" + email,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })
        .then(({ data }) => data)
        .catch(error => console.log(error));
    }

    async createSousCateg(dataForm) {
      let user = jwt_decode(localStorage.getItem('user-token'));
      let fullUser = this.getUser(user.username);
      fullUser = await fullUser;
      return await this.api
        .post("/api/sous_categories",
          {
            nomSouscategorie: dataForm.nomSousCateg,
            typeCategorie: dataForm.categorie,
            description: dataForm.description,
            ingredients: dataForm.listIngredients,
            recettes: dataForm.listEtapes,
            owner: '/api/users/' + fullUser[0].id
          },{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('user-token')
            }
          })
        .then(({ data }) => {
          if(dataForm.photo !== ''){
            this.addPhoto(dataForm,data);
          }
        })
        .catch(error =>{ return error});
    }

    async addPhoto(dataForm,data) {

      let formData = new FormData();

      formData.append("file", dataForm.photo);
      formData.append("description", dataForm.description);
      formData.append("photoSouscategorie",data.id)
      
      return await this.api
        .post("/api/photos",formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })
        .then(({ data }) => data)
        .catch(error =>{
          console.log(error);
        })
    }

    async getPhotos(id) {
      return await this.api
        .get("/api/sous_categories/" + id)
        .then(({ data }) => data.photos)
        .catch(error => console.log(error));
    }
  
    async deleteSousCateg(id) {
      return await this.api
        .delete("/api/sous_categories/" + id.idSousCateg,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })  
        .catch(error => console.log(error));
    }

    async getSousCategorie(id) {
      return await this.api
        .get("/api/sous_categories/" + id)
        .then(({ data }) => data)
        .catch(error => console.log(error));
    }
}

const api = new OnSetApi();

export default api;