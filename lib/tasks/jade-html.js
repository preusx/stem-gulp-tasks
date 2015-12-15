var JadeTask = require('../base/tasks/jade');

var HTMLJadeTask = module.exports = JadeTask.extend({
  paths: {
    base: global.P.dev + global.P.jade + 'html/',
    source: [
      global.P.dev + global.P.jade + 'html/**/*.jade',
      '!' + global.P.dev + global.P.jade + 'html/**/_*.jade'
    ],
    dest:   global.P.dist + global.P.html,
  },

  config: {
    ext: '.html',
  },

  watch: global.P.dev + global.P.jade + '**/*.jade',
});