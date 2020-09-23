import axios from "axios";

class OnSetApi{
    constructor() {
        const baseURL = "https://127.0.0.1:8000/api"; // https://api.onset-rp.com/
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
          .get("/categories")
          .then(({ data }) => data)
          .catch(error => console.log(error));
    }

    async addPhoto(data) {
      console.log(data);
      return await this.api
        .post("/photos", {
          "imageName": data.file.name,
          "photoSouscategorie": '/api/sous_categories/'+data.sousCateg.id
        })
        .then(({ data }) => data)
        .catch(error => console.log(error));
    }

    async getSouscategorieById(id) {
      return await this.api
        .get("/sous_categories/" + id)
        .then(({ data }) => data)
        .catch(error => console.log(error));
    }

}

const api = new OnSetApi();

export default api;