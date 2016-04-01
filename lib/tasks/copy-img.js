var CopyTask = require('../base/tasks/copy');

var ImagesCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.img + '**/*.{png,jpg,gif,svg}',
    dest:   global.P.dist.img,
  },

  watch: global.P.dev.img + '**/*.{png,jpg,gif,svg}',
});
