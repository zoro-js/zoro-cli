import Home from 'module/home'
import app from './app'

let routes = [
  {path: '/', component: Home},
  ...app,
  {path: '*', redirect: '/'}
]

export default routes
