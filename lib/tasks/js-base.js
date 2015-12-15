var JSTask = require('../base/tasks/js');

var BaseJSTask = module.exports = JSTask.extend({
  paths: {
    base: [config.folder.dev + config.folder.js],
    source: global.P.dev + global.P.js + '*.js',
    dest:   global.P.dist + global.P.js,
  }
});