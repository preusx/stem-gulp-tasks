'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodeNotifier = require('node-notifier');

var _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = exports.Task = function () {
  function Task(config) {
    _classCallCheck(this, Task);

    this.config = config || {};
  }

  _createClass(Task, [{
    key: 'pipes',
    value: function pipes(pipe) {
      var plumber = require('gulp-plumber');

      pipe.pipe(plumber({
        errorHandler: this.errorHandler
      }));

      return pipe;
    }
  }, {
    key: 'errorHandler',
    value: function errorHandler(err) {
      err.firstLine = err.message.split('\n')[0];

      if (!err.filename) {
        err.filename = err.firstLine.replace(/\:[0-9]+$/img, '');
      }

      if (!err.line) {
        if (!err.lineno) {
          err.line = err.firstLine.replace(/(.*)(\:([0-9]+))$/img, '$3');
        } else {
          err.line = err.lineno;
        }
      }

      var pathName = err.filename.replace(__dirname, '');
      var errorPosition = err.line + ':' + (err.column | '') + '::';
      var extName = _path2.default.extname(pathName);

      // Notification
      _nodeNotifier2.default.notify({
        title: extName.slice(1) + ' (' + err.plugin + ') error:',
        message: errorPosition + pathName + "\n" + err.message,
        sound: true
      });

      // Log to console
      _gulpUtil2.default.log(_gulpUtil2.default.colors.red('Error'), err.message);
    }
  }]);

  return Task;
}();