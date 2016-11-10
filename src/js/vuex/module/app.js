import * as types from '../mutation-types'

const state = {
  apps: [],
  appMap: {},
  limit: process.env.NODE_ENV === 'production' ? 20 : 2,
  total: 0
}

const mutations = {
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
  [types.RECEIVE_APP] (state, app) {
    mapApps(state, [app])
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
