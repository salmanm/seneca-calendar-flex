'use strict'

// Load modules
var Code = require('code')
var Assert = require('assert')
var Lab = require('lab')
var Seneca = require('seneca')
var SenecaCalendarFlex = require('..')

// Shortcuts
var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

var test_options = {log: 'silent'}

describe('seneca-calendar-flex', function () {
  it('can be used by seneca', function (done) {
    var seneca = Seneca(test_options)

    var fn = function () {
      seneca.use(SenecaCalendarFlex)
    }

    expect(fn).to.not.throw()
    done()
  })

  it('Should add a new calendar entry', function (done) {
    Seneca(test_options)
      .error(done)
      .use(SenecaCalendarFlex)
      .ready(function () {
        var seneca = this
        var test_evt = {
          title: 'New Event',
          desc: 'To test',
          loc: 'in Lab',
          invitees: [{
            email: 'test@example.com',
            rsvp: 'no'
          }],
          starttime: new Date('2016-01-06T05:20:00.000Z'),
          endtime: new Date('2016-01-06T06:20:00.000Z')
        }
        seneca.act({
          role: 'flex',
          flex: 'calendar',
          cmd: 'add'
        }, test_evt, function (err, new_evt) {
          Assert.equal(err, null)
          Assert.equal(new_evt.title, 'New Event')
          done()
        })
      })
  })
})
