import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'
import Recette from '../views/Recette.vue'
import Backoffice from '../views/Backoffice.vue'
import Login from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { scrollToTop: true }
  },
  {
    path: '/galerie/:name/:id',
    name: 'Photo',
    component: Photo,
    meta: { scrollToTop: true }
  },
  {
    path: '/backoffice',
    name: 'Backoffice',
    component: Backoffice,
    meta: { scrollToTop: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { scrollToTop: true }
  },
  {
    path: '/recette/:id',
    name: 'Recette',
    component: Recette,
    meta: { scrollToTop: true }
  },
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
