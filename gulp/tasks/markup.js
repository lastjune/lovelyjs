var gulp = require('gulp');
var config = require('../config');

gulp.task('markup', function() {
    gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dest));
    gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));
});
