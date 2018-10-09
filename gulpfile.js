const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean'); 
const sequence = require('run-sequence');

gulp.task('compile', () => {
  const tsProject = ts.createProject("./tsconfig.json", {});
  return gulp.src(['./src/components/**/*.tsx', './src/components/**/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest('./dist/components'))
});

gulp.task('index', () => {
  const tsProject = ts.createProject("./tsconfig.json", {});
  return gulp.src(['./src/index.tsx'])
    .pipe(tsProject())
    .pipe(gulp.dest('./dist'))
});

gulp.task('copy-scss', () => {
  return gulp.src('./src/components/**/*.scss')
    .pipe(gulp.dest('./dist/components'))
});

gulp.task('copy-icons', () => {
  return gulp.src('./src/icons/**/*')
    .pipe(gulp.dest('./dist/icons'))
});

gulp.task('copy-common', () => {
  return gulp.src('./src/common/**/*')
    .pipe(gulp.dest('./dist/common'))
});

gulp.task('clean', () => {
  return gulp.src('./dist/*')
    .pipe(clean())
});

gulp.task('default', (callback) => { 
  return sequence('clean', ['copy-icons', 'copy-scss', 'copy-common'], 'compile', 'index', callback)
});