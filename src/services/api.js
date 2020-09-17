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

}

const api = new OnSetApi();

export default api;