var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', gulp.series(function(done) {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);

    done();
}));


gulp.task('sass', gulp.series(function(done) {
	return gulp.src('scss/style.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
		    .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
        done();
}));

gulp.task('default', gulp.parallel('serve', function () {
    gulp.series('serve')
}));

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();

