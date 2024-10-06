const { watch, series, src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const connect = require("gulp-connect");

// js
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");

sass.compiler = require("sass");

function server() {
	return connect.server({
		root: "build",
		livereload: true,
	});
}

function javascript(cb) {
	const bundler = browserify({
		entries: [
			"./node_modules/babel-polyfill/dist/polyfill.js",
			"./src/js/app.js",
		],
	}).transform(
		babelify.configure({
			presets: ["@babel/preset-env"],
		})
	);

	return bundler
		.bundle()
		.pipe(source("app.js"))
		.pipe(buffer())
		.pipe(dest("./build"))
		.pipe(connect.reload());
}

function css(cb) {
	return src("./src/sass/style.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(dest("./build"))
		.pipe(connect.reload());
}

function html(cb) {
	return src("./src/index.html").pipe(dest("./build")).pipe(connect.reload());
}

function public(cb) {
	return src("./public/*")
		.pipe(dest("./build/public/"))
		.pipe(connect.reload());
}

// function img(cb) {
// 	return gulp
// 		.src("./public/img/*", { encoding: false })
// 		.pipe(gulp.dest("./build/public/img"))
// 		.pipe(connect.reload());
// }

function img(cb) {
	return src("./public/img/*", { encoding: false })
		.pipe(dest("./build/public/img"))
		.pipe(connect.reload());
}

// gulp.task('default', function () {
//     return gulp.src('./public/img/*', {encoding: false})
//         .pipe(gulp.dest('./build/public/img'));
// });

exports.build = series(html, css, javascript, public, img);

exports.watch = function () {
	server();

	watch("./src/sass/**/*.scss", css);
	watch("./src/js/**/*.js", javascript);
	watch("./src/**/*.html", html);
};
