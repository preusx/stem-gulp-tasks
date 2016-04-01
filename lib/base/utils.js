var path = require('path');
var notifier = require('node-notifier');
var gutil = require('gulp-util');



var noop = module.exports.noop = require('gulp-util/lib/noop');



var capitalize = module.exports.capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};



// Standard handler
var errorHandler = module.exports.errorHandler = function errorHandler(err){
  err.firstLine = err.message.split('\n')[0];

  if(!err.filename) {
    err.filename = err.firstLine.replace(/\:[0-9]+$/img, '');
  }

  if(!err.line) {
    if(!err.lineno) {
      err.line = err.firstLine.replace(/(.*)(\:([0-9]+))$/img, '$3');
    } else {
      err.line = err.lineno;
    }
  }

  var pathName = err.filename.replace(__dirname, '');
  var errorPosition = err.line + ':' + (err.column | '') + '::';
  var extName = path.extname(pathName);

  // Notification
  notifier.notify({
    title: capitalize(extName.slice(1)) + ' (' + err.plugin + ') error:',
    message: errorPosition + pathName + "\n" + err.message,
    sound: true,
  });

  // Log to console
  gutil.log(gutil.colors.red('Error'), err.message);
};
