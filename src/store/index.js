import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import message from './modules/message'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    auth: auth,
    message: message
  }
})
