var gulp = require('gulp');
var runSequence=require('run-sequence').use(gulp);

gulp.task('build-test', function(cb){
    runSequence('build-clean','static','css','browserify','revCollector','markup',cb);
});
