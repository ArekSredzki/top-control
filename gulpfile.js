var gulp         = require('gulp');
var rename       = require('gulp-rename');
var jshint       = require('gulp-jshint');
var uglify       = require('gulp-uglify');

var del          = require('del');
var stylish      = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('scripts-dev', function() {
  return gulp.src('src/top-control.js')
    .pipe(gulp.dest('gen'));
});

gulp.task('scripts-prod', function() {
  return gulp.src('src/top-control.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('top-control.min.js'))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['lint', 'scripts-dev']);
});

gulp.task('clean', function(cb) {
  del(['dist', 'gen'], cb);
});

gulp.task('default', ['scripts-dev',  'watch']);
gulp.task('production', ['scripts-prod']);
