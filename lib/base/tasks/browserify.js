var path   = require('path');

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

  config: {
    babelPresets: [
      "es2015-loose",
    ],
  },

  pipes: {
    dev: function(entry) {
      var self = this;

      var sourcemaps = require('gulp-sourcemaps');
      var source     = require('vinyl-source-stream');
      var buffer     = require('vinyl-buffer');
      var browserify = require('browserify');
      var watchify   = require('watchify');
      var babelify   = require('babelify');

      var bundler = watchify(
          self.transform(browserify({
            insertGlobals : false,
            paths: [this.paths.base],
            debug  : global.DEBUG,
            entries: [entry],
          }))
          .transform(babelify.configure({
            presets: self.config.babelPresets,
          }))
        );

      function rebundle() {
        return bundler.bundle()
          .on('error', utils.errorHandler)
          .pipe(source(entry.replace(self.paths.base, '')))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write('./'));
      }

      rebundle.bundler = bundler;

      return rebundle;
    }
  },

  transform: function(pipe) {
    return pipe;
  },

  bundle: function(pipe, watch, done) {
    var self = this;

    glob(this.paths.source, function(err, files) {
      if(err) done(err);

      var tasks = files.map(function(entry) {
          var p = pipe(entry);

          if(watch) {
            p.bundler.on('update', function() {
              console.log('-> bundling...');

              return p()
                .pipe(gulp.dest(self.paths.dest));
            });
          }

          return p()
            .pipe(gulp.dest(self.paths.dest));
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
