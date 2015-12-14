var gulp   = require('gulp');

var Task   = require('./base/task');
var utils  = require('./base/utils');



module.exports = Task.extend({
  paths: {
    base: '',
    source: '',
    dest: '',
  },

  watch: '',

  config: {
    ext: '.html'
  },

  pipes: {
    dev: function(pipe) {
      var jade             = require('gulp-jade');
      var jadeAffected     = require('gulp-jade-find-affected');
      var jadeInheritance  = require('gulp-jade-inheritance');
      var jadeCompiler     = require('jade');
      var changed          = require('gulp-changed');
      var plumber          = require('gulp-plumber');
      var rename           = require('gulp-rename');

      return pipe
        .pipe(global.WATCHING ? plumber({
          errorHandler: utils.errorHandler,
        }) : utils.noop())
        .pipe(global.WATCHING ? changed(this.paths.dest, {}) : utils.noop())
        .pipe(jadeInheritance({
          basedir: this.paths.base,
        }))
        .pipe(jade({
          pretty: global.DEBUG,
          jade: jadeCompiler,
        }));
        .pipe(rename({
          extname: this.config.ext,
        }));
    }
  }
});
