var CopyTask = require('../base/tasks/copy');

var RootCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.root + '*.*',
    dest:   global.P.dist.root,
  },

  watch: global.P.dev.root + '*.*',
});
