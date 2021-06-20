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
  }
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
