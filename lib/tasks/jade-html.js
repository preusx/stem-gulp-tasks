var JadeTask = require('../base/tasks/jade');

var HTMLJadeTask = module.exports = JadeTask.extend({
  paths: {
    base: global.P.dev.jade + 'html/',
    source: [
      global.P.dev.jade + 'html/**/*.jade',
      '!' + global.P.dev.jade + 'html/**/_*.jade'
    ],
    dest:   global.P.dist.html,
  },

  config: {
    ext: '.html',
  },

  watch: global.P.dev.jade + 'html/**/*.jade',
});
