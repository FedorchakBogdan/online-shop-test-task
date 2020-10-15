import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import message from './modules/message'
import products from './modules/products'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    auth: auth,
    message: message,
    products: products
  }
})
