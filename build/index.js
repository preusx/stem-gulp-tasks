'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _task = require('./base/task');

Object.keys(_task).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _task[key];
    }
  });
});

var _pug = require('./tasks/pug');

Object.keys(_pug).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pug[key];
    }
  });
});

var _copy = require('./tasks/copy');

Object.keys(_copy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _copy[key];
    }
  });
});

var _stylus = require('./tasks/stylus');

Object.keys(_stylus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stylus[key];
    }
  });
});

var _webpack = require('./tasks/webpack');

Object.keys(_webpack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _webpack[key];
    }
  });
});