import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

{/* <font-awesome-icon :icon="['fas', 'home']" />
<font-awesome-icon :icon="['fas', 'table']" />
<font-awesome-icon :icon="['fas', 'screwdriver']" />
<font-awesome-icon :icon="['fas', 'globe-europe']" /> */}

const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    icon: 'globe-europe',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
