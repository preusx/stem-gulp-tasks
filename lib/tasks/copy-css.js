var CopyTask = require('../base/tasks/copy');

var CSSCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.css + '**/*.css',
    dest:   global.P.dist.css,
  },

  watch: global.P.dev.css + '**/*.css',
});
