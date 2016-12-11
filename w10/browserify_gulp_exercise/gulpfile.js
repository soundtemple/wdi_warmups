var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babel = require('gulp-babel')

gulp.task('bundle',function() {
 return browserify('./app.js')
   .bundle()

   .pipe(source('bundle.js'))

   .pipe(buffer())
   .pipe(babel({
         presets: ['es2015']
     }))
   .pipe(uglify())
   .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
 gulp.watch(['app.js'], ['bundle'])
})

gulp.task('server', function() {
  connect.server()
});

gulp.task('default', ['server', 'watch']);
