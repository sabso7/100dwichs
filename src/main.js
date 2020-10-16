import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import masonry from "masonry-layout";



Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  masonry,
  render: h => h(App)
}).$mount('#app')
