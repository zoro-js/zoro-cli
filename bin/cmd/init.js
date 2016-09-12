const Promise = require('bluebird')
const fs = require('fs-extra-promise')
const dirs = [
  'src/js/entry',
  'src/postcss',
  'src/postcss/entry',
  'src/html',
  'dist'
]
const files = [
  'src/js/entry/index.js',
  'src/js/entry/foo.js',
  'src/postcss/entry/index.css',
  'src/postcss/entry/common.css',
  'src/html/index.html'
]

exports.command = 'init'
exports.desc = 'init dirs'
exports.builder = {}
exports.handler = function (argv) {
  const p1 = Promise.map(dirs, dir => {
    return fs.ensureDirAsync(dir)
  })
  const p2 = Promise.map(files, file => {
    return fs.ensureFileAsync(file)
  })
  return Promise.all([p1, p2])
}
