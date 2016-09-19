import home from './module/home'
import app from './module/app'
import * as actions from './action'
import * as getters from './getter'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    app
  },
  actions,
  getters,
  strict: debug
})
