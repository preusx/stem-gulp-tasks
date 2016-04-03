var JSTask = require('../base/tasks/webpack');

var BaseJSTask = module.exports = JSTask.extend({
  paths: {
    base: global.P.dev.js,
    source: {
      main: global.P.dev.js + 'main.js'
    },
    dest:   global.P.dist.js,
    filename: '[name].js',
  },

  watch: global.P.dev.js + '**/*.js',
});