var CopyTask = require('../base/tasks/copy');

var VendorCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev + global.P.vendor + '**/*.*',
    dest:   global.P.dist + global.P.vendor,
  },

  watch: global.P.dev + global.P.vendor + '**/*.*',
});
