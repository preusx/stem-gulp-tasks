var CopyTask = require('../base/tasks/copy');

var PythonCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.py + '**/*.py',
    dest:   global.P.dist.py,
  },

  watch: global.P.dev.py + '**/*.py',
});
