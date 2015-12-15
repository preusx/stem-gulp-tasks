var gulp   = require('gulp');
var glob   = require('glob');
var es     = require('event-stream');

var Task   = require('../Task');
var utils  = require('../utils');



module.exports = Task.extend({
  paths: {
    base: '',
    source: '',
    dest: '',
  },

  pipes: {
    dev: function(entry) {
      var sourcemaps = require('gulp-sourcemaps');
      var source     = require('vinyl-source-stream');
      var buffer     = require('vinyl-buffer');
      var coffeeify  = require('coffeeify');
      var browserify = require('browserify');
      var watchify   = require('watchify');
      var babelify   = require('babelify');

      var bundler = watchify(
          browserify({
            insertGlobals : false,
            paths: this.paths.base,
            debug  : global.DEBUG,
            entries: [entry],
          })
          .transform({extensions: ['.coffee']}, coffeeify)
          .transform(babelify.configure({
            loose: 'all',
          }))
        );

      function rebundle() {
        return bundler.bundle()
          .on('error', utils.errorHandler)
          .pipe(source(entry))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write('./'));
      }

      rebundle.bundler = bundler;

      return rebundle;
    }
  },

  bundle: function(pipe, watch, done) {
    glob(this.paths.source, function(err, files) {
      if(err) done(err);

      var tasks = files.map(function(entry) {
          var p = pipe(entry);

          if(watch) {
            p.bundler.on('update', function() {
              console.log('-> bundling...');

              return pipe()
                .pipe(gulp.dest(this.paths.dest));
            });
          }

          return pipe()
            .pipe(gulp.dest(this.paths.dest));
        });

      es.merge(tasks).on('end', done);
    })
  },

  watch: function(done) {
    return this.bundle(this.pipes.dev, true, done);
  },

  dev: function(done) {
    return this.bundle(this.pipes.dev, false, done);
  },

  build: function(done) {
    return this.bundle(this.pipes.build, false, done);
  },
});
