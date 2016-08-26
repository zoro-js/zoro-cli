#!/usr/bin/env node

require('yargs')
  .demand(1)
  .commandDir('cmd')
  .help()
  .version()
  .alias({
    h: 'help',
    v: 'version'
  })
  .argv
