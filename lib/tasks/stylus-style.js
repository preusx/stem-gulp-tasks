var StylusTask = require('../base/tasks/stylus');

var StyleStylusTask = module.exports = StylusTask.extend({
  paths: {
    source: global.P.dev + global.P.styl + 'style.styl',
    dest:   global.P.dist + global.P.css,
  },

  watch: global.P.dev + global.P.styl + '**/*.styl',
});
