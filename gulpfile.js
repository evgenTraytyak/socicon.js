var 
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	csso = require('gulp-csso');

gulp.task('sass', function () {
	gulp
		.src('./dev/css/*.scss')
		.pipe(sass({ 
			errLogToConsole: true,
			sourceMap: 'sass'
		}))
		.pipe(prefix("last 3 version", "> 1%", { cascade: true }))
		.pipe(gulp.dest('./source/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./dev/css/**', function() {
		gulp.run('sass');
	});
});

gulp.task('css-minify', function() {
	gulp
		.src( './source/css/*.css' )
		.pipe( csso() )
		.pipe( gulp.dest('./production/css/') );
});

gulp.task('default', ['sass', 'watch']);

gulp.task('build', ['sass', 'css-minify']);
