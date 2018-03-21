const gulp = require('gulp');


gulp.task('images:copy', () => {
    return gulp.src('./src/client/images/**/*.*')
        	   .pipe(gulp.dest('./public/images'));
});
