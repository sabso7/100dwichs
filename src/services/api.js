import axios from "axios";

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

    async addPhoto(dataForm) {

      let formData = new FormData();

      formData.append("file", dataForm.file);
      formData.append("description", dataForm.description);
      
      return await this.api
        .post("/api/photos",formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })
        .then(({ data }) => this.updatePhoto(data.id,dataForm.sousCateg))
        .catch(error =>{
          console.log(error);
        })
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

    async updatePhoto(id,idSouscategorie) {
      return await this.api
        .put("/api/photos/" + id, {
          'photoSouscategorie': "/api/sous_categories/" + idSouscategorie
        },{
          headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
          }
        })
        .then(({ data }) => data)
        .catch(error => console.log(error));
    }
    
    async getPhotos(id) {
      return await this.api
        .get("/api/sous_categories/" + id)
        .then(({ data }) => data.photos)
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
          }
        })
        .catch(error =>{ return error});
    }

    async createSousCateg(data) {
      return await this.api
        .post("/api/sous_categories",
          {
            nomSouscategorie: data.nomSousCateg,
            typeCategorie: data.categorie,
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