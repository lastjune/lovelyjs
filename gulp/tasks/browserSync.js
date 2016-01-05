var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

gulp.task('browserSync', function() {
    browserSync(config, function(err, bs) {
        // bs.options.url contains the original url, so
        // replace the port with the correct one:

        var url = bs.options.getIn(["urls", "local"]).replace(':3000', ':3002');
        require('opn')(url);
        console.log('Started browserSync on ' + url);
    });
});
