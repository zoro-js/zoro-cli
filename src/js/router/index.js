import routes from './routes'
import scrollBehavior from './routes/scrollBehavior'

export default new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
})
