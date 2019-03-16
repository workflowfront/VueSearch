'use strict'
const helpers= require('./helpers')
const config = require('../configs')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: helpers.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    transformToRequire: {
        video: 'app',
        source: 'app',
        img: 'app',
        image: 'xlink:href'
    }
}