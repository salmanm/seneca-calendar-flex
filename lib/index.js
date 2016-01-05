'use strict'

// Load modules

// Declare internals
var internals = {
  name: 'seneca-calendar-flex',
  defaults: {
    // Put any default plugin settings here
  }
}

module.exports = function (options) {
  var seneca = this

  options = seneca.util.deepextend(internals.defaults, options)

  return { name: internals.name }
}
