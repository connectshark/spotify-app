import { createStore } from 'vuex'

const store = createStore({
  state: {
    token: ''
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    }
  },
  actions: {
    init: ({ commit }, token) => {
      commit('setToken', token)
    }
  }
})

export default store