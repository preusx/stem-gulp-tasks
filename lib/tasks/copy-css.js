var CopyTask = require('../base/tasks/copy');

var CSSCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + global.P.css + '**/*.css',
    dest:   global.P.dist + global.P.css,
  },

  watch: global.P.dev + global.P.css + '**/*.css',
});