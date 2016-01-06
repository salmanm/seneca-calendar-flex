'use strict'

var internals = {
  name: 'seneca-calendar-flex',
  defaults: {

  }
}

module.exports = function (options) {
  var seneca = this

  options = seneca.util.deepextend(internals.defaults, options)

  seneca.add({
    role: 'flex',
    flex: 'calendar',
    cmd: 'add'
  }, {
    title: {type$: 'string'},
    invitees: {type$: 'array'},
    starttime: {type$: 'date'},
    endtime: {type$: 'date'}
  }, function (msg, done) {
    var title = msg.title
    var desc = msg.desc
    var loc = msg.loc
    var invitees = msg.invitees
    var starttime = msg.starttime
    var endtime = msg.endtime

    var evt = seneca.make('flex/calendar', {
      title,
      desc,
      loc,
      invitees,
      starttime,
      endtime
    })

    evt.save$(function (err, new_evt) {
      if (err) {
        return done(err)
      }

      done(null, new_evt)
    })
  })

  return { name: internals.name }
}
