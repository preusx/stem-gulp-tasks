var JSTask = require('../base/tasks/browserify');

var BaseJSTask = module.exports = JSTask.extend({
  paths: {
    base: global.P.dev.js,
    source: global.P.dev.js + '*.js',
    dest:   global.P.dist.js,
  }
});
