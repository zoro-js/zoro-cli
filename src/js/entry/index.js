import 'util/common'
import store from 'vuex/store'
import router from 'router'

const vm = new Vue({
  store,
  router,
  render: h => h('router-view'),
  creted () {}
}).$mount('#app')

window.store = store
window.router = router
window.vm = vm
