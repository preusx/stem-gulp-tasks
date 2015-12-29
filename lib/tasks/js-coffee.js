var BaseJSTask = require('./js-base');

var CoffeeJSTask = module.exports = BaseJSTask.extend({
  paths: {
    source: global.P.dev + global.P.js + '*.{js,coffee}',
  },

  transform: function(pipe) {
    var coffeeify  = require('coffeeify');

    return BaseJSTask.transform.$m.call(this, pipe)
      .transform({extensions: ['.coffee']}, coffeeify)
  },
});
