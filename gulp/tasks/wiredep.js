'use strict';
let gulp=require('gulp');
let wiredep=require('gulp-wiredep');

gulp.task('wiredep',function(cb){
    gulp.src('./src/index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./dist'));
});
