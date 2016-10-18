import axios from 'axios'
import * as util from './index'

axios.interceptors.response.use(response => {
  console.group()
  console.warn(response.config.url)
  console.warn('request config', response.config)
  console.warn('response', response)
  console.warn('response.data', response.data)
  console.groupEnd()
  if (response.data.status !== 200) {
    handleError(response.data)
    return Promise.reject(response)
  } else {
    const body = response && response.data && response.data.body
    response.body = body
    return Promise.resolve(response)
  }
}, error => {
  handleError(error)
  return Promise.reject(error)
})

const handleError = error => {
  console.warn('xhr error', error)
  if (!error.response) {
    util.showError(error.message)
  }
}

export default axios
