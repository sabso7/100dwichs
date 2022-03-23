import api from './api';
import store from '../store/index';

api.api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log("yolo");
  alert("session expired");
  return response;
}, function (error) {
  console.log("yolo");
  alert("session expired");
  return Promise.reject(error);
})

/*api.api.interceptors.response.use(
    response => {
      console.log('eeeeeeedede');
      if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
  error => {
    console.log("yolo");
      if (error.response.status) {
        console.log("yolo");
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
            console.log("yolo");
            if(detail.includes("SQLSTATE[23000]")){
              alert("Veuillez supprimer les sous-catégories avant de supprimer cette catégorie !");
            }
            break;
        }
        return Promise.reject(error.response);
      }
    }
  );*/
