var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var DIST = 'dist';

gulp.task("clean",function() {
  return gulp.src("./dst/*")
  .pipe($.clean());
});

gulp.task("css", function () {
  return gulp.src(["public/**/*.css", "!public/**/*.min.css"])
    .pipe($.minifyCss())
    .pipe(gulp.dest(DIST));
});

gulp.task("js", function () {
  return gulp.src(["public/**/*.js", "!public/**/*.min.js"])
    .pipe($.uglify())
    .pipe(gulp.dest(DIST));
});

gulp.task("html", function () {
  return gulp.src("public/**/*.html")
    .pipe($.minifyHtml())
    .pipe(gulp.dest(DIST));
});

gulp.task('generate', ["css", "js", "html"]);

gulp.task("default", ["css", "js", "html"]);

gulp.task("watch", function () {
  gulp.watch("public/*", ["default"]);
});

gulp.task('serve', ['styles'], function () {

  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/**/*.scss", ['styles']);
  gulp.watch("src/**/*.html").on('change', browserSync.reload);
});