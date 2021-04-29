const { watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

// js
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
 
sass.compiler = require('node-sass');

function server() {
  return connect.server({
    root: 'build',
    livereload: true
  });
}

function javascript(cb) {
  const bundler = browserify({
    entries: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './src/js/app.js',
    ],
  }).transform(
    babelify.configure({
      presets: ['@babel/preset-env'],
    })
  );

  return bundler
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(dest('./build'))
    .pipe(connect.reload());
}

function css(cb) {
  return src('./src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./build'))
    .pipe(connect.reload());
}

function html(cb) {
  return src('./src/index.html')
    .pipe(dest('./build'))
    .pipe(connect.reload());
}

function public(cb) {
  return src('./public/*')
    .pipe(dest('./build/public/'))
    .pipe(connect.reload());
}

exports.build = series(html, css, javascript, public);

exports.watch = function () {
  server();

  watch('./src/sass/**/*.scss', css);
  watch('./src/js/**/*.js', javascript);
  watch('./src/**/*.html', html);
}