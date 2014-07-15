var 
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer');

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

gulp.task('default', ['sass']);
