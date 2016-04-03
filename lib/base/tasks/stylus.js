var gulp   = require('gulp');

var Task   = require('../Task');
var utils  = require('../utils');

module.exports = Task.extend({
  paths: {
    source: '',
    dest:   '',
  },

  watch: '',

  pipes: {
    dev: function(pipe, scmap) {
      var stylus         = require('gulp-stylus');
      var plumber        = require('gulp-plumber');
      var sourcemaps     = require('gulp-sourcemaps');
      var postcss        = require('gulp-postcss');

      var pAutoprefixer  = require('autoprefixer');
      var pMqpacker      = require('css-mqpacker');
      var pMatches       = require('postcss-selector-matches');
      var pQuantity      = require('postcss-quantity-queries');
      scmap = typeof scmap == 'undefined' ? true : false;

      // Useful stuff for docs generation: mdcss[https://github.com/jonathantneal/mdcss]

      return pipe
        .pipe(global.WATCHING ? plumber({
            errorHandler: utils.errorHandler,
          }) : utils.noop())
        .pipe(scmap ? sourcemaps.init() : utils.noop())
          .pipe(stylus({
              pretty: global.DEBUG,
              'include css': true,
              compress: global.DEBUG,
            }))
          .pipe(postcss([
              pAutoprefixer({
                  browsers: ['> 0.5%']
                }),
              pMqpacker({
                  sort: true,
                }),
              pMatches,
              pQuantity,
            ]))
        .pipe(scmap ? sourcemaps.write() : utils.noop());
    },

    build: function(pipe) {
      var csso = require('gulp-csso');

      return this.pipes.dev(pipe, false)
        .pipe(csso(true));
    }
  }
});
