/**
 * Load Gulp Dependencies
 * @type {Gulp|exports|module.exports}
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

/**
 * Compiles .less files into css
 */
gulp.task('less', function() {
    gulp.src('assets/style/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('assets/style/css/core'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(concat('core.min.css'))
        .pipe(gulp.dest('assets/style/dist/css'))

});


gulp.task('depMinifyCss', function(){
    gulp.src('assets/style/css/dep/**/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(concat('dep.min.css'))
        .pipe(gulp.dest('assets/style/dist/css'))
});

gulp.task('compress', function() {
    gulp.src('app/**/*.js')
        .pipe(uglify())
        .pipe(concat('core.min.js'))
        .pipe(gulp.dest('app/dist/'))
});

gulp.task('depConcat', function() {
    gulp.src([
        'assets/js/lib/angular.min.js',
        'assets/js/lib/angular-ui-router.min.js',
        'assets/js/lib/angular-rateit.min.js',
        'assets/js/lib/ngDialog.min.js'
    ])
        .pipe(concat('dep.min.js'))
        .pipe(gulp.dest('assets/js/dist/'))
});


//
// gulp.task('coreMinifyCss', function(){
//     gulp.src('assets/style/css/core/**/*.css')
//         .pipe(cleanCSS({debug: true}, function(details) {
//             console.log(details.name + ': ' + details.stats.originalSize);
//             console.log(details.name + ': ' + details.stats.minifiedSize);
//         }))
//         .pipe(concat('core.min.css'))
//         .pipe(gulp.dest('assets/style/dist/css'))
// });

/**
 * Watch task, looks for real time updated less files & saves them
 */
gulp.task('watch', function() {
    gulp.watch('assets/style/less/**/*.less', ['less', 'depMinifyCss']);
});

