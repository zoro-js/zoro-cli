import * as types from '../mutation-types'

export const getApp = ({commit}, id) => {
  setTimeout(() => {
    commit(types.RECEIVE_APP, {
      id,
      time: new Date()
    })
  }, 2000)
}
