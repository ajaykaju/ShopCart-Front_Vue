import { createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/Home'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router


