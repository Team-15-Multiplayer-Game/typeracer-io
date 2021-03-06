import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Room from '../views/Room.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/room/:room',
    name: 'Room',
    component: Room
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/:room',
    name: 'Room',
    component: Room
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
