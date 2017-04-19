// @prontotools
'use strict'

const spawn = require('cross-spawn')
const path = require('path')
const paths = require('../config/paths')

const eslintConfigFilePath = path.resolve(paths.rootDir, 'eslintrc')
const eslintIgnoreFilePath = path.resolve(paths.rootDir, 'eslintignore')
const args = process.argv.slice(2)

const result = spawn.sync(
  path.resolve(paths.rootDir, 'node_modules/.bin/eslint'),
  ['-c', eslintConfigFilePath, '--ignore-path', eslintIgnoreFilePath, paths.appSrc, ...args],
  { stdio: 'inherit' }
)

const { output, stdout, stderr } = result.output
output && console.log('output', output)
stdout && console.log('stdout', stdout.toString())

if (stderr) {
  stderr && console.error('stderr', stderr.toString())
}
