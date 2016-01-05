'use strict'

// Load modules
var Code = require('code')
var Lab = require('lab')
var Seneca = require('seneca')
var SenecaCalendarFlex = require('..')

// Shortcuts
var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('seneca-calendar-flex', function () {
  it('can be used by seneca', function (done) {
    var seneca = Seneca({ log: 'silent' })

    var fn = function () {
      seneca.use(SenecaCalendarFlex)
    }

    expect(fn).to.not.throw()
    done()
  })
})
