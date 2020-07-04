const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')


const depsCSS = cb => {
    gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({
            "uglyComments": false
        }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('dist/assets/css'))

    return cb()
}

const depsFonts = cb => {
    gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('dist/assets/fonts'))
    return cb()
}

module.exports = {
    depsCSS,
    depsFonts
}
