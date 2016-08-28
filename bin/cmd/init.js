const Promise = require('bluebird')
const fs = require('fs-extra-promise')
const dirs = [
  'src/js/entry',
  'src/postcss',
  'src/postcss/entry',
  'src/html',
  'dist'
]

exports.command = 'init'
exports.desc = 'init dirs'
exports.builder = {}
exports.handler = function (argv) {
  Promise.map(dirs, dir => {
    return fs.ensureDirAsync(dir)
  })
}
