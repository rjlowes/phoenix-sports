const gulp = require('gulp');
const clean = require('gulp-clean');


gulp.task('clean:dev', () => {
	return gulp.src('./public', {read: false})
		.pipe(clean());
});
