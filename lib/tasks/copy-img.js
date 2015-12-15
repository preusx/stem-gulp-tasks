var CopyTask = require('../base/tasks/copy');

var ImagesCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + global.P.img + '**/*.{png,jpg,gif,svg}',
    dest:   global.P.dist + global.P.img,
  },

  watch: global.P.dev + global.P.img + '**/*.{png,jpg,gif,svg}',
});