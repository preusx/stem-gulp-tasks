var CopyTask = require('../base/tasks/copy');

var PHPCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + global.P.php + '**/*.{php,html}',
    dest:   global.P.dist + global.P.php,
  },

  watch: global.P.dev + global.P.php + '**/*.{php,html}',
});
