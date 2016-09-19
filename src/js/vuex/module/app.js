import * as types from '../mutation-types'

const state = {
  map: {}
}

const mutations = {
  [types.RECEIVE_APP] (state, app) {
    storeApp(state, app)
  }
}

function storeApp (state, app) {
  state.map[app.id] = app
}

export default {
  state,
  mutations
}
