import gulp from 'gulp';

import { Task } from '../base/task';


export class StylusTask extends Task {
  pipes(pipe) {
    var stylus         = require('gulp-stylus');
    var sourcemaps     = require('gulp-sourcemaps');
    var postcss        = require('gulp-postcss');

    var pAutoprefixer  = require('autoprefixer');
    var pMqpacker      = require('css-mqpacker');
    var pMatches       = require('postcss-selector-matches');
    var pQuantity      = require('postcss-quantity-queries');
    var csso           = require('gulp-csso');

    // Useful stuff for docs generation: mdcss[https://github.com/jonathantneal/mdcss]

    return super.pipes(pipe)
      .pipe(sourcemaps.init())
        .pipe(stylus({
            pretty: true,
            'include css': true,
            compress: false,
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
      .pipe(sourcemaps.write())
      .pipe(csso(true));
  }
}
