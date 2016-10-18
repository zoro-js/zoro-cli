import * as types from '../mutation-types'

const state = {
  apps: [],
  appMap: {},
  loadingApps: false,
  limit: process.env.NODE_ENV === 'production' ? 20 : 2,
  total: 0,
  editingApp: false
}

const mutations = {
  [types.START_GET_APPS] (state) {
    state.loadingApps = true
  },
  [types.RESET_APPS] (state) {
    state.apps = []
    state.appMap = {}
    state.total = 0
  },
  [types.RECEIVE_APPS] (state, {apps, total}) {
    state.apps = [...apps]
    state.total = total
    mapApps(state, apps)
  },
  [types.STOP_GET_APPS] (state) {
    state.loadingApps = false
  },
  [types.START_EDIT_APP] (state) {
    state.editingApp = true
  },
  [types.RECEIVE_APP] (state, app) {
    mapApps(state, [app])
  },
  [types.STOP_EDIT_APP] (state) {
    state.editingApp = false
  }
}

function mapApps (state, apps) {
  apps.forEach(app => {
    state.appMap[app.appKey] = Object.assign({}, app)
  })
}

export default {
  state,
  mutations
}
