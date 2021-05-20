import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Fees from '../views/Fees.vue'
import Reviews from '../views/Reviews.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fees',
    name: 'Fees',
    component: Fees
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
