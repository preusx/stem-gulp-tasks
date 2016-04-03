var gulp = require('gulp');
var extend = require('extend');

var Task = module.exports = {
  extend: function(object) {
    var newObject = {};

    newObject = extend(true, newObject, this, object);
    newObject.super = extend(true, {}, this);
    binder(newObject);

    newObject.init();

    return newObject;

    function binder(object) {
      var that = newObject;

      for(var i in object) {
        if(!object.hasOwnProperty(i)) continue;

        var self = object[i];

        // Is function. Underscore code.
        if(!!(self && self.constructor && self.call && self.apply)) {
          if(typeof self.$m === 'undefined') {
            object[i] = self.bind(that);
            object[i].$m = self;
          } else {
            object[i] = self.$m.bind(that);
            object[i].$m = self.$m;
          }

        } else if(self === Object(self) && (typeof self.$m === 'undefined') &&
            Object.prototype.toString.call(self) !== '[object Array]') {

          binder(self);
        }
      }
    }
  },

  init: function() {},

  setConfig: function(object) {
    if(object) {
      this.config = extend(true, {}, this.config, object);
    }
  },

  paths: {},
  watch: false,
  config: {},

  pipes: {
    dev: function(pipe) {
      return pipe;
    },

    build: function(pipe) {
      return this.pipes.dev(pipe);
    }
  },

  dev: function (watching) {
    return this.pipes.dev(gulp.src(this.paths.source))
      .pipe(gulp.dest(this.paths.dest));
  },

  build: function (watching) {
    return this.pipes.build(gulp.src(this.paths.source))
      .pipe(gulp.dest(this.paths.dest));
  }
};
