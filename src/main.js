import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import lightbox from './plugins/lightbox';
import VueMasonryPlugin from "./plugins/vueMasonry";
import vueMq from "./plugins/vueMq";

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueMasonryPlugin,
  store,
  lightbox,
  vueMq,
  render: h => h(App)
}).$mount('#app')
