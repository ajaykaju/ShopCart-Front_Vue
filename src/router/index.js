import { createRouter, createWebHistory} from 'vue-router'

import Home from '../pages/Home'
import Test from '../pages/Test'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Test',
    path: '/Test',
    component: Test
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router


