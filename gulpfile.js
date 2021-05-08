const gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp.src('src/style/mains.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('src/style/mains.less', gulp.series('less'));  // Watch all the .less files, then run the less task
});