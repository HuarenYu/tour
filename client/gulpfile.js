var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rev = require('gulp-rev');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rimraf = require('rimraf');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src(['app/stylesheets/base.scss', 'app/stylesheets/app.scss'])
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 5%', 'Last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/stylesheets'));
});

gulp.task('sass-reload', ['sass'], function () {
  browserSync.reload();
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('clean', function (cb) {
  rimraf('./dist', cb);
});

gulp.task('usemin', ['clean'], function () {
  return gulp.src('index.html')
    .pipe(usemin({
      cssBase: [minifyCss(), rev()],
      cssApp: [minifyCss(), rev()],
      jsBase: [uglify(), rev()],
      jsApp: [uglify(), rev()]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('app/stylesheets/**/*.scss', ['sass-reload']);
});

gulp.task('dist', function () {
  
});

gulp.task('default', ['serve', 'watch']);
