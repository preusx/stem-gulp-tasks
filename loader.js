var path = require('path');

var gulp  = require('gulp');
var watch = require('gulp-watch');

require('./config');

module.exports = function loader(dir, taskPaths) {
  var tasks = {};
  global.DIR = dir;

  /**
   * Loading tasks
   */
  for(var i = 0, l = taskPaths.length; i < l; i++) {
    var taskPath = taskPaths[i],
        taskName = path.basename(taskPath, '.js');
    var spos = taskPath.indexOf('./');
    var rpath;

    if(spos == 0 || spos == 1) {
      rpath = path.normalize(dir + taskPath);
    } else {
      rpath = path.normalize(__dirname + '/lib/tasks/' + taskPath);
    }

    var task = tasks[taskName] = require(rpath);

    gulp.task(taskName + ':dev', task.dev);
    gulp.task(taskName + ':build', task.build);

    if(typeof task.watch == 'function') {
      gulp.task(taskName + ':watch', task.watch);
    } else if(task.watch) {
      gulp.task(taskName + ':watch', (function(tN, wch) {
        return function() {
          return watch(wch, function() {
              gulp.start(tN + ':dev');
            });
        };
      })(taskName, task.watch));
    }
  }

  /**
   * Additive tasks.
   */
  gulp.task('watch', function(){
    console.log('I\'m watching...');

    global.WATCHING = true;

    for(var i in tasks) {
      if(!tasks.hasOwnProperty(i)) continue;

      var task = tasks[i];

      if(task.watch) {
        gulp.start(i + ':watch');
      }
    }
  });
};
