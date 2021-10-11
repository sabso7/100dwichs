import api from './api';
import store from '../store/index';

api.api.interceptors.response.use(
    response => {
      if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
  error => {
      if (error.response.status) {
        switch (error.response.status) {
          case 400:
           
           //do something
            break;
        
          case 401:
            store.dispatch('logout')
            alert("session expired");
            break;
          case 404:
            alert('page not exist');
            break;
          case 500:
            var detail = error.response.data.detail;
            if(detail.includes("SQLSTATE[23000]")){
              alert("Veuillez supprimer les sous-catégories avant de supprimer cette catégorie !");
            }
            break;
        }
        return Promise.reject(error.response);
      }
    }
  );
