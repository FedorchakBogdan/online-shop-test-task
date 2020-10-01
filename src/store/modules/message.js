export default {
  namespaced: true,
  state: {
    flushError: false,
    flushSuccess: false
  },
  mutations: {
    setFlushError (state, flushError) {
      state.flushError = flushError
    },
    setFlushSuccess (state, flushSuccess) {
      state.flushSuccess = flushSuccess
    }
  },
  actions: {
    setFlushError: ({ commit }, flushError) => {
      commit('setFlushError', flushError)
    },
    setFlushSuccess: ({ commit }, flushSuccess) => {
      commit('setFlushSuccess', flushSuccess)
    }
  },
  getters: {
    getFlushError: (state) => state.flushError,
    getFlushSuccess: (state) => state.flushSuccess
  }
}
