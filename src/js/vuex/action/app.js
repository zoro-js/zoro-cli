import * as types from '../mutation-types'
import xhr from 'util/xhr'

export const editApp = ({commit}, {app, isNew}) => {
  const url = isNew ? '/app/create' : '/app/update'
  return xhr.post(url, app).then(({body}) => {
    const {app} = body
    commit(types.RECEIVE_APP, app)
    return app
  })
}

export const getApp = ({commit}, appKey) => {
  return xhr.post('/app/list', {appKeys: [appKey]}).then(({body}) => {
    commit(types.RECEIVE_APP, body.apps[0])
  })
}

export const getApps = ({commit, state}, obj) => {
  obj = Object.assign({}, obj)
  const {reset} = obj
  if (reset) {
    commit(types.RESET_APPS)
    delete obj.reset
    obj.offset = 0
    obj.limit = state.app.limit
  }
  return xhr.post('/app/list', obj).then(({body}) => {
    commit(types.RECEIVE_APPS, _.pick(body, [
      'apps',
      'total'
    ]))
  })
}
