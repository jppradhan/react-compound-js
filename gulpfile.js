const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean'); 
const sequence = require('run-sequence');
const replace = require('gulp-replace');
const sass = require('gulp-sass');

gulp.task('compile', () => {
  const tsProject = ts.createProject("./tsconfig.json", {
    declaration: true,
    allowJs: false,
  });
  return gulp.src(['./src/components/**/*.tsx', './src/components/**/*.ts'])
    .pipe(tsProject())
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('./dist/components'))
});

gulp.task('index', () => {
  const tsProject = ts.createProject("./tsconfig.json", {
    declaration: true,
    allowJs: false,
  });
  return gulp.src(['./src/index.tsx'])
    .pipe(tsProject())
    .pipe(replace('./components', './dist/components'))
    .pipe(gulp.dest('./'))
});

gulp.task('compile-scss', () => {
  return gulp.src('./src/components/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/components'))
});

gulp.task('copy-icons', () => {
  return gulp.src('./src/icons/**/*')
    .pipe(gulp.dest('./dist/icons'))
});

gulp.task('clean', () => {
  return gulp.src('./dist/*')
    .pipe(clean())
});

gulp.task('default', (callback) => { 
  return sequence('clean', ['copy-icons', 'compile-scss', 'compile', 'index' ], callback)
});