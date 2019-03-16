
'use strict'
require('eventsource-polyfill')
var clientReload = require('webpack-hot-middleware/client?noInfo=true&reload=true')

clientReload.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})