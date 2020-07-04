const gulp = require('gulp')
const {series, parallel} = require('gulp')

const app = require('./gulpTasks/app')
const deps = require('./gulpTasks/deps')
const server = require('./gulpTasks/servidor')


module.exports.default = series(
    parallel(
        series(app.appHTML, app.appCSS, app.appJS, app.appIMG),
        series(deps.depsFonts, deps.depsCSS)
    ),
    server.servidor,
    server.monitoraArquivos
)