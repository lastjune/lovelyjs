var gulp = require('gulp');
var runSequence=require('run-sequence').use(gulp);

gulp.task('default', function(cb){
    runSequence('build-clean','setWatch', 'static','css','browserify','revCollector','browserSync' ,'watch',cb);
});
