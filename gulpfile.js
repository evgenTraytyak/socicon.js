var 
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	rename = require("gulp-rename"),
	csso = require('gulp-csso'),
	uglify = require('gulp-uglify');

gulp.task('sass', function () {
	gulp
		.src('./dev/css/*.scss')
		.pipe( sass({
			errLogToConsole: true,
			sourceMap: 'sass'
		}))
		.pipe( prefix("last 3 version", "> 1%", { cascade: true }) )
		.pipe( gulp.dest('./source/css/') );
});

gulp.task('watch', function () {
    gulp.src( './dev/css/**' )
        .pipe( watch(function(files) {
            return files.pipe(sass())
                .pipe(gulp.dest('./source/css/'));
        }));
});

gulp.task('css-minify', function() {
	gulp
		.src( './source/css/socicon.css' )
		.pipe( csso() )
		.pipe( rename({suffix: '.min'}) )
		.pipe( gulp.dest('./source/css/') );
});

gulp.task('js-minify', function() {
	gulp
		.src( './dev/js/*.js' )
		.pipe( uglify() )
		.pipe( rename({suffix: '.min'}) )
		.pipe( gulp.dest('./source/js/') );
});

gulp.task('copy', function(){
  gulp.src('./dev/js/*.js')
    .pipe(gulp.dest('./source/js/'));
});

gulp.task('default', ['sass', 'copy', 'watch', 'js-minify']);

gulp.task('build', ['sass', 'copy', 'css-minify', 'js-minify']);
