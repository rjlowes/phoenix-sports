'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('server', function () {
	return nodemon({
		script: 'server.js',
		//ignore: ['app/client'],
		watch: ['src/server/**'],
        // --expose-debug-as=v8debug is webstorm workaround for ReferenceError: v8debug is not defined
		// replaced by teh inspect API
        // nodeArgs: ['--debug', '--expose-debug-as=v8debug'],
		execMap: {
            js: "node --inspect"
        },
		ext: 'js html',
        env: {
            'NODE_ENV': 'development'
		}
	});
});
