var 
	gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp
		.src('./dev/css/*.scss')
		.pipe(sass({ 
			errLogToConsole: true,
			sourceMap: 'sass'
		}))
		.pipe(gulp.dest('./source/css/'));
});

gulp.task('default', ['sass']);
