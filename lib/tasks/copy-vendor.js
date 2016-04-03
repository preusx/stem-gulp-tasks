var CopyTask = require('../base/tasks/copy');

var VendorCopyTask = module.exports = CopyTask.extend({
  paths: {
    source: global.P.dev.vendor + '**/*.*',
    dest:   global.P.dist.vendor,
  },

  watch: global.P.dev.vendor + '**/*.*',
});
