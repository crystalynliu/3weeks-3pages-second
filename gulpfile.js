var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync').create()

gulp.task('sass', function () {
  return gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/font/**.*')
    .pipe(gulp.dest('./dist/font'))
})

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./",
      port: 3030
  });

  gulp.watch("./src/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch('./src/images/***');

  gulp.task('default', ['serve']);
});
