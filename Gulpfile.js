// https://www.timroes.de/2015/07/29/using-ecmascript-6-es6-with-angularjs-1-x/
// https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate/blob/master/package.json
'use strict';

const gulp = require('gulp');
const rd = require('require-dir');
const runSequence = require('run-sequence');

rd('./gulp');

gulp.task('default old', () =>
    runSequence('clean:dev', 'sass:dev', 'scripts:dev', 'html:dev', 'fonts:copy', 'images.copy', 'server', 'watch'));

gulp.task('default', () =>
    runSequence('clean:dev', 'server', 'sass:dev', 'html:dev', 'svg:dev', 'images:copy', 'fonts:copy', 'watch', 'scripts:dev'));



// Run the project tests
gulp.task('test:server', (done) => runSequence('env:test', 'mocha', done));
