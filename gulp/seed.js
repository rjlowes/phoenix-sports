const gulp = require('gulp');
const seed = require('../src/server/config/lib/seed/mongoose-seed');

gulp.task('seed:db', () => {
    seed.init();
    // process.exit(0);
});
