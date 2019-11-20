/* eslint-env node */

// Module imports
const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')





// Import variables from .env file.
require('dotenv').config()





// Component constants
const DEFAULT_PORT = 3000





module.exports = withSass(withCSS({
  target: 'serverless',

  env: {
    buildDate: (new Date()).toISOString(),
    nodeVersion: process.version,
  },

  sassLoaderOptions: {
    includePaths: ['styles', 'node_modules']
      .map((dir) => path.join(__dirname, dir))
      .map((dir) => glob.sync(dir))
      .reduce((acc, dir) => acc.concat(dir), []),
  },
}))
