import { store } from '../store'
const Login = () => import('@views/auth/Login.vue')

const redirect = (to, from, next) => {
  if (store.state.auth.accessToken) {
    next({ path: '/' })
  } else {
    next()
  }
}

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
    beforeEnter: redirect,
    meta: {
      guestGuard: true,
      title: 'Login',
      layout: 'login'
    }
  }
]
