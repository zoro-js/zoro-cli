import Home from 'module/home'
import Forbidden from 'module/forbidden'
import app from './app'

let routes = [
  {path: '/', component: Home},
  {path: '/forbidden', component: Forbidden},
  ...app,
  {path: '*', redirect: '/'}
]

export default routes
