
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.watchList.css,['css']);
    gulp.watch(config.watchList.html,['revCollector']);
    gulp.watch(config.watchList.js,['browserify']);

});
