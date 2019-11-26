/* eslint-env node */

// Module imports
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

  webpack: (config, data) => {
    config.module.rules.unshift({
      enforce: 'pre',
      exclude: /node_modules/u,
      loader: 'eslint-loader',
      test: /\.js$/u,
    })

    return config
  },
}))
