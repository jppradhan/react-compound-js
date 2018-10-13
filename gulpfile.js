const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean'); 
const sequence = require('run-sequence');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const shell = require('gulp-shell');

gulp.task('compile', () => {
  const tsProject = ts.createProject("./tsconfig.json", {
    declaration: true,
    allowJs: false,
  });
  return gulp.src(['./src/components/**/*.tsx', './src/components/**/*.ts'])
    .pipe(tsProject())
    .pipe(replace('.scss', '.css'))
    .pipe(replace('.svg', ''))
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

gulp.task('convert-svg', shell.task(
  './node_modules/@svgr/cli/bin/svgr --icon --template ./config/template.js --filename-case kebab --ext tsx -d ./dist/icons ./src/icons'
));

gulp.task('compile-svg', () => {
  const tsProject = ts.createProject("./tsconfig.json", {
    declaration: false,
    allowJs: false,
    rootDir: './dist'
  });
  return gulp.src('./dist/icons/**/*.tsx')
    .pipe(tsProject())
    .pipe(gulp.dest('./dist/icons'))
})

gulp.task('clean-tsx-icons', () => {
  return gulp.src('./dist/icons/**/*.tsx')
    .pipe(clean())
})

gulp.task('clean', () => {
  return gulp.src('./dist/*')
    .pipe(clean())
});

gulp.task('default', (callback) => { 
  return sequence('clean', [
    'compile-scss', 
    'compile', 'index' 
  ], 
  'convert-svg', 
  'compile-svg', 
  'clean-tsx-icons', callback)
});
