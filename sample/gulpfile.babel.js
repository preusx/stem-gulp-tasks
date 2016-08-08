import gulp from 'gulp';
import { P as p } from '../build/config';

import {
  Task,
  PugTask,
  CopyTask,
  StylusTask,
  WebpackTask,
  } from '../build/';


let paths = {
  stylus: [
    `${p.dev.stylus}style.styl`,
    ],

  pug: [
    `${p.dev.pug}**/*.pug`,
    `!${p.dev.pug}**/_*.pug`,
    ],

  copy: [
    `${p.dev.public}**/*.*`,
    ],

  js: [
    `${p.dev.js}**/*.js`,
    ],
};

gulp.task('stylus', () => {
  return (new StylusTask())
    .pipes(gulp.src(paths.stylus))
    .pipe(gulp.dest(p.dest.stylus));
});

gulp.task('pug', () => {
  return (new PugTask({
        dest: p.dest.pug,
        }))
    .pipes(gulp.src(paths.pug))
    .pipe(gulp.dest(p.dest.pug));
});

gulp.task('copy', () => {
  return (new CopyTask())
    .pipes(gulp.src(paths.copy))
    .pipe(gulp.dest(p.dest.public));
});

gulp.task('js', () => {
  return (new WebpackTask(require('./webpack.config')))
    .pipes(gulp.src(paths.js))
    .pipe(gulp.dest(p.dest.js));
});


gulp.task('watch', () => {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.pug, ['pug']);
  gulp.watch(paths.copy, ['copy']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'copy']);
