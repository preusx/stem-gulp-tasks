var gulp   = require('gulp');

var Task   = require('./base/task');
var utils  = require('./base/utils');

module.exports = Task.extend({
  paths: {
    source: '',
    dest:   '',
  },

  watch: '',

  pipes: {
    dev: function(pipe) {
      var stylus         = require('gulp-stylus');
      var plumber        = require('gulp-plumber');
      var sourcemaps     = require('gulp-sourcemaps');
      var postcss        = require('gulp-postcss');

      var pAutoprefixer  = require('autoprefixer');
      var pMqpacker      = require('css-mqpacker');
      var pMatches       = require('postcss-selector-matches');
      var pQuantity      = require('postcss-quantity-queries');

      // Useful stuff for docs generation: mdcss[https://github.com/jonathantneal/mdcss]

      return pipe
        .pipe(global.WATCHING ? plumber({
            errorHandler: utils.errorHandler,
          }) : utils.noop())
        .pipe(sourcemaps.init())
          .pipe(stylus({
              pretty: global.DEBUG,
              'include css': true,
              compress: global.DEBUG,
            }))
          .pipe(postcss([
              pAutoprefixer({
                  browsers: ['> 0.5%']
                }),
              pMqpacker,
              pMatches,
              pQuantity,
            ]))
        .pipe(sourcemaps.write());
    },

    build: function(pipe) {
      var csso = require('gulp-csso');

      return this.pipes.dev(pipe).pipe(csso(true));
    }
  }
});