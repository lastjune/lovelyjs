var gulp   = require('gulp');
var clean=require('gulp-clean');

gulp.task('cleanJs',function(){
	return gulp.src('dist/scripts').pipe(clean());
});
