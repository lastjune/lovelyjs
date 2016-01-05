var gulp   = require('gulp');
var clean=require('gulp-clean');
var config=require('../config.js');

gulp.task('cleanCss',function(){
	return gulp.src('dist/styles').pipe(clean());
});
