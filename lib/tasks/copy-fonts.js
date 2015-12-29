var CopyTask = require('../base/tasks/copy');

var FontsCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + global.P.font + '**/*.{eot,otf,svg,ttf,woff}',
    dest:   global.P.dist + global.P.font,
  },

  watch: global.P.dev + global.P.font + '**/*.{eot,otf,svg,ttf,woff}',
});
