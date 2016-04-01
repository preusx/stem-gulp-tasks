var Task   = require('../Task');
var utils  = require('../utils');
var path = require('path');

module.exports = Task.extend({
  paths: {
      base: '',
      source: '',
      dest: '',
      filename: '',
    },

  watch: '',

  config: {
    entry: '',
    output: {
      path: '',
      filename: '',
      },
    module: {
      loaders: [
          {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['es2015-loose'],
              plugins: ['transform-runtime']
              },
            },
        ],
      },
    },

  init: function() {
      this.config.entry = this.paths.source;
      this.config.output.path = this.paths.dest;
      this.config.output.filename = this.paths.filename;
    },

  pipes: {
    dev: function(callback) {
      var self = this;

      var webpack = require("webpack");
      var gutil = require("gulp-util");

      try {
      return webpack(this.config, function(err, stats) {
          if(err) {
            utils.errorHandler(err);
          }

          gutil.log('[webpack]', stats.toString({
            colors: true,
            }));

          callback();
        });
      } catch(e) {
        console.dir(e);
      }
    }
  },

  dev: function(arg) {
    return this.pipes.dev(arg);
  },

  build: function(arg) {
    return this.pipes.build(arg);
  }

});
