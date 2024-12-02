import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ChangePassword from '../views/ChangePassword.vue'
import LoginSuccess from '../views/LoginSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/success',
    name: 'Success',
    component: LoginSuccess,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
