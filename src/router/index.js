import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'
import Backoffice from '../views/Backoffice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/galerie/:name/:id',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/backoffice',
    name: 'Backoffice',
    component: Backoffice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
