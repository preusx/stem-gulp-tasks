var BaseJSTask = require('./js-browserify');

var config = JSON.parse(JSON.stringify(BaseJSTask.config));
config.babelPresets.push('react');

var ReactJSTask = module.exports = BaseJSTask.extend({
  paths: {
    source: global.P.dev.js + '*.{js,jsx}'
  },

  config: config,
});
