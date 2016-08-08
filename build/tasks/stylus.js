'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylusTask = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _task = require('../base/task');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StylusTask = exports.StylusTask = function (_Task) {
  _inherits(StylusTask, _Task);

  function StylusTask() {
    _classCallCheck(this, StylusTask);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StylusTask).apply(this, arguments));
  }

  _createClass(StylusTask, [{
    key: 'pipes',
    value: function pipes(pipe) {
      var stylus = require('gulp-stylus');
      var sourcemaps = require('gulp-sourcemaps');
      var postcss = require('gulp-postcss');

      var pAutoprefixer = require('autoprefixer');
      var pMqpacker = require('css-mqpacker');
      var pMatches = require('postcss-selector-matches');
      var pQuantity = require('postcss-quantity-queries');
      var csso = require('gulp-csso');

      // Useful stuff for docs generation: mdcss[https://github.com/jonathantneal/mdcss]

      return _get(Object.getPrototypeOf(StylusTask.prototype), 'pipes', this).call(this, pipe).pipe(sourcemaps.init()).pipe(stylus({
        pretty: true,
        'include css': true,
        compress: false
      })).pipe(postcss([pAutoprefixer({
        browsers: ['> 0.5%']
      }), pMqpacker({
        sort: true
      }), pMatches, pQuantity])).pipe(sourcemaps.write()).pipe(csso(true));
    }
  }]);

  return StylusTask;
}(_task.Task);