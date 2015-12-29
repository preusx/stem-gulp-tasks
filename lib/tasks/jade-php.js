var JadeTask = require('../base/tasks/jade');

var PHPJadeTask = module.exports = JadeTask.extend({
  paths: {
    base: global.P.dev + global.P.jade + 'php/',
    source: global.P.dev + global.P.jade + 'php/**/*.jade',
    dest:   global.P.dist,
  },

  config: {
    ext: '.php',
  },

  watch: global.P.dev + global.P.jade + '**/*.jade',
});
