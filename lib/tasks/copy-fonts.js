var CopyTask = require('../base/tasks/copy');

var FontsCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.font + '**/*.{eot,otf,svg,ttf,woff}',
    dest:   global.P.dist.font,
  },

  watch: global.P.dev.font + '**/*.{eot,otf,svg,ttf,woff}',
});
