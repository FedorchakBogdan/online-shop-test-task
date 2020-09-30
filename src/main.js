import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyCusGBPWMkr6SyR2M738V2n-A8Y8a-5kd0',
  authDomain: 'test-onile.firebaseapp.com',
  databaseURL: 'https://test-onile.firebaseio.com',
  projectId: 'test-onile',
  storageBucket: 'test-onile.appspot.com',
  messagingSenderId: '766927476119',
  appId: '1:766927476119:web:2a77f08dd48c4fc65ca0d2',
  measurementId: 'G-62CHQW1CNL'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
