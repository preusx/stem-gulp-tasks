var StylusTask = require('../base/tasks/stylus');

var StyleStylusTask = module.exports = StylusTask.extend({
  paths: {
    source: global.P.dev.stylus + 'style.styl',
    dest:   global.P.dist.css,
  },

  watch: global.P.dev.stylus + '**/*.styl',
});
