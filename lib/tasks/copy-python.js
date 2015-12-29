var CopyTask = require('../base/tasks/copy');

var PythonCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + global.P.py + '**/*.py',
    dest:   global.P.dist + global.P.py,
  },

  watch: global.P.dev + global.P.py + '**/*.py',
});
