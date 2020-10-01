import { store } from '../store'
const Registration = () => import('@views/registration/Registration.vue')

const redirect = (to, from, next) => {
  if (store.state.auth.accessToken) {
    next({ path: '/' })
  } else {
    next()
  }
}

export default [
  {
    name: 'registration',
    path: '/registration',
    component: Registration,
    beforeEnter: redirect,
    meta: {
      guestGuard: true,
      title: 'Registration',
      layout: 'registration'
    }
  }
]
