var gulp = require('gulp'),
    eslint = require('gulp-eslint');
var scripts = require('../config.js').scripts.src;
gulp.task('lint', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src([scripts]) // ,'!node_modules/**'
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({
            extends: 'eslint:recommended',
            ecmaFeatures: {
                'modules': true
            },
            rules: {
                'my-custom-rule': 1,
                'strict': 2
            },
            globals: {
                'jQuery': false,
                '$': true
            },
            envs: [
                'browser'
            ],
            fix:true
        }))
        .pipe(eslint.result(function(result) {
            // Called for each ESLint result.
            console.log('ESLint result: ' + result.filePath);
            console.log('# Messages: ' + result.messages.length);
            console.log('# Warnings: ' + result.warningCount);
            console.log('# Errors: ' + result.errorCount);
        }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});
