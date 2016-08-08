'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PugTask = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _task = require('../base/task');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PugTask = exports.PugTask = function (_Task) {
  _inherits(PugTask, _Task);

  function PugTask() {
    _classCallCheck(this, PugTask);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PugTask).apply(this, arguments));
  }

  _createClass(PugTask, [{
    key: 'pipes',
    value: function pipes(pipe) {
      var pug = require('gulp-pug');
      var pugCompiler = require('pug');
      var changed = require('gulp-changed');
      var rename = require('gulp-rename');

      return pipe.pipe(changed(this.config.dest, {})).pipe(pug({
        pretty: true,
        pug: pugCompiler,
        basedir: this.config.base || ''
      })).pipe(rename({
        extname: this.config.ext || '.html'
      }));
    }
  }]);

  return PugTask;
}(_task.Task);