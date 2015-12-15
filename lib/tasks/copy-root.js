var CopyTask = require('../base/tasks/copy');

var RootCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + '*.*',
    dest:   global.P.dist,
  },

  watch: global.P.dev + '*.*',
});