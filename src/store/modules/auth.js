import firebase from 'firebase/app'
import Cookies from 'js-cookie'

export default {
  namespaced: true,
  state: {
    accessToken: Cookies.get('access_token') || '',
    isCorrect: true
  },
  mutations: {
    setAccessToken: (state, token) => {
      state.accessToken = token
      Cookies.set('access_token', token, { expires: 365 })
    },
    setIsCorrect: (state, flag) => {
      state.isCorrect = flag
    }
  },
  actions: {
    loginRequest: async ({ commit }, { email, password }) => {
      await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
          commit('setAccessToken', response.user.xa)
          commit('setIsCorrect', true)
        })
        .catch(error => {
          console.log(error)
          commit('setIsCorrect', false)
        })
    },
    registrationUser: async ({ commit, dispatch }, { email, password }) => {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
          const uid = dispatch('getUserID')
          firebase.database().ref(`/users/${uid}/info`).set({
            name: name
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    getUserID: () => {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    }
  },
  getters: {
    getIsCorrect: (state) => state.isCorrect
  }
}
