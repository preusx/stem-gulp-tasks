var JadeTask = require('../base/tasks/jade');

var PHPJadeTask = module.exports = JadeTask.extend({
  paths: {
    base: global.P.dev.jade + 'php/',
    source: global.P.dev.jade + 'php/**/*.jade',
    dest:   global.P.dist.php,
  },

  config: {
    ext: '.php',
  },

  watch: global.P.dev.jade + 'php/**/*.jade',
});
