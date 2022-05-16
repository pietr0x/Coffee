const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const sassDir = './src/sass/*.sass';
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp
    .src(sassDir)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

gulp.task('clean', () => {
  return del(['css/index.css']);
});

gulp.task(
  'serve',
  gulp.series(['sass'], () => {
    browserSync.init({
      server: './',
    });

    gulp.watch(sassDir, gulp.series(['sass']));
    gulp.watch('./*.html').on('change', browserSync.reload);
  })
);

gulp.task('default', gulp.series(['clean', 'sass']));
