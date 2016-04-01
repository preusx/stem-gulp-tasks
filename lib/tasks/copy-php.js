var CopyTask = require('../base/tasks/copy');

var PHPCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.php + '**/*.{php,html}',
    dest:   global.P.dist,
  },

  watch: global.P.dev.php + '**/*.{php,html}',
});
