var BaseJSTask = require('./js-base');

var config = JSON.parse(JSON.stringify(BaseJSTask.config));
config.babelPresets.push('react');

var ReactJSTask = module.exports = BaseJSTask.extend({
  paths: {
    source: global.P.dev + global.P.js + '*.{js,jsx}'
  },

  config: config,
});
