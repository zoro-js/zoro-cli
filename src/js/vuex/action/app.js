import * as types from '../mutation-types'
import xhr from 'util/xhr'

export const editApp = ({commit}, {app, isNew}) => {
  commit(types.START_EDIT_APP)
  const url = isNew ? '/app/create' : '/app/update'
  return xhr.post(url, app).then(({body}) => {
    const {app} = body
    commit(types.RECEIVE_APP, app)
    commit(types.STOP_EDIT_APP)
    return app
  }).catch(error => {
    commit(types.STOP_EDIT_APP)
    throw error
  })
}

export const getApp = ({commit}, appKey) => {
  return xhr.post('/app/list', {appKeys: [appKey]}).then(({body}) => {
    commit(types.RECEIVE_APP, body.apps[0])
  })
}

export const getApps = ({commit, state}, obj) => {
  obj = Object.assign({}, obj)
  commit(types.START_GET_APPS)
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
    commit(types.STOP_GET_APPS)
  }).catch(error => {
    commit(types.STOP_GET_APPS)
    throw error
  })
}
