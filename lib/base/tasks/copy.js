var gulp   = require('gulp');

var Task   = require('../Task');
var utils  = require('../utils');



module.exports = Task.extend({
  paths: {
    source: '',
    dest:   ''
  },

  watch: '',

  pipes: {
    dev: function(pipe) {
      var plumber = require('gulp-plumber');

      return pipe
        .pipe(global.WATCHING ? plumber({
          errorHandler: utils.errorHandler,
        }) : utils.noop())
    }
  }
});
