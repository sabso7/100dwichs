import axios from "axios";

class OnSetApi{
    constructor() {
        const baseURL = "https://127.0.0.1:8000"; // https://api.onset-rp.com/
        this.api = axios.create({
          baseURL,
          timeout: 6000,
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

      console.log(dataForm);

      let formData = new FormData();

      formData.append("file", dataForm.file);

      return await this.api
        .post("/api/photos",formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(({ data }) => this.updatePhoto(data.id,dataForm.sousCateg.id))
        .catch(error => console.log(error));
    }

    async updatePhoto(id,idSouscategorie) {

      console.log(idSouscategorie);
      return await this.api
        .put("/api/photos/" + id, {
          'photoSouscategorie': "/api/sous_categories/" + idSouscategorie
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

}

const api = new OnSetApi();

export default api;