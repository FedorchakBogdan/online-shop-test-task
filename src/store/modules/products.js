import Cookies from 'js-cookie'
import { db } from '@/main'

export default {
  namespaced: true,
  state: {
    products: [],
    currentProduct: {}
  },
  mutations: {
    setAccessToken: (state, token) => {
      state.accessToken = token
      Cookies.set('access_token', token, { expires: 365 })
    },
    setIsCorrect: (state, flag) => {
      state.isCorrect = flag
    },
    setProducts: (state, products) => {
      state.products.push(products)
    },
    setCurrentProduct: (state, product) => {
      state.currentProduct = product
    }
  },
  actions: {
    fetchProducts: async ({ commit, state }) => {
      state.products = []
      db.collection('products').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          const currentID = doc.id
          const appObj = { ...doc.data(), id: currentID }
          commit('setProducts', appObj)
        })
      })
    },
    getProductsById: async ({ commit, state }, id) => {
      db.collection('products').doc(id).get().then(function (doc) {
        commit('setCurrentProduct', doc.data())
      })
    },
    uploadPhotoToDocument: async ({ commit }, params) => {
      // const uploadTask = storageRef.put(firstFile)
    },
    createProduct: async ({ commit }, params) => {
      db.collection('products').doc().set(params)
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    updateProduct: async ({ commit }, params) => {
      console.log('update ', params)
      db.collection('products').doc(params.id).set(
        params.data
      )
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    deleteProduct: async ({ commit }, id) => {
      db.collection('products').doc(id).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  },
  getters: {
    getIsCorrect: (state) => state.isCorrect,
    getProducts: (state) => state.products,
    getCurrentProduct: (state) => state.currentProduct
  }
}
