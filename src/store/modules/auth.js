import firebase from 'firebase/app'

export default {
  namespaced: true,
  state: {
    accessToken: ''
  },
  mutations: {
    setAccessToken: (state, token) => {
      state.accessToken = token
    }
  },
  actions: {
    loginRequest: async ({ commit }, { email, password }) => {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
          .then(response => {
            console.log('Success! ', response)
          })
          .catch(error => {
            console.log('Failed!', error)
          })
      } catch (e) {
        throw e
      }
    }
  },
  getters: {
  }
}
