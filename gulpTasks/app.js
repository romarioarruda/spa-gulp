const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sass = require('gulp-sass')


const appHTML = cb => {
    gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))

    return cb()
}

const appCSS = cb => {
    gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('Error', sass.logError))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('dist/assets/css'))

    return cb()
}

const appJS = cb => {
    gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            comments: true,
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/assets/js'))

    return cb()
}

const appIMG = cb => {
    gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('dist/assets/imgs'))

    return cb()
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}