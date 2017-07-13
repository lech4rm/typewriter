const gulp = require('gulp')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()
const watch = require('gulp-watch')
const rename = require('gulp-rename')
const babelify = require('gulp-babel')




gulp.task('js', () => {
  return gulp.src('./src/app.js')
          .pipe(babelify({
            presets: ['es2015']
          }))
          .pipe(uglify({mangle : true}))
          .pipe(rename('textType.min.js'))
          .pipe(gulp.dest('./dist'))
})



gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch("./src/*.js", ['js']).on('change', browserSync.reload);
})

gulp.task('default', ['js', 'browser-sync'])
