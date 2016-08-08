import gulp from 'gulp';

import { Task } from '../base/task';


export class PugTask extends Task {
  pipes(pipe) {
    var pug              = require('gulp-pug');
    var pugCompiler      = require('pug');
    var changed          = require('gulp-changed');
    var rename           = require('gulp-rename');

    return pipe
      .pipe(changed(this.config.dest, {}))
      .pipe(pug({
        pretty: true,
        pug: pugCompiler,
        basedir: this.config.base || '',
      }))
      .pipe(rename({
        extname: this.config.ext || '.html',
      }));
  }
}
