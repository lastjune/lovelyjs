var gulp = require('gulp');
var runSequence=require('run-sequence').use(gulp);
gulp.task('build-all', function(cb){
    runSequence('markup');
});
