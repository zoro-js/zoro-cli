const path = require('path')
const fs = require('fs-extra-promise')
const Promise = require('bluebird')
const dirs = [
  'dist'
]

exports.command = 'init'
exports.desc = 'init dirs & files'
exports.builder = {}
exports.handler = function (argv) {
  const p1 = Promise.map(dirs, dir => {
    return fs.ensureDirAsync(dir)
  })
  const p2 = fs.copy(path.join(__dirname, '../../src'), 'src', {
    clobber: false
  })
  return Promise.all([p1, p2])
}
