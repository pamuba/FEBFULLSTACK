let gulp = require('gulp')
let jshint = require('gulp-jshint')

//gulp --tasks lists all tasks
//gulp task-name to run a task
// gulp.task('gulp-jshint', function(done){
//     gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done()
// })

//default task 
// gulp.task('default', function(done){
//     gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//     done()
// })

//creating a task with new gulp ver 4
function task_jshint(done){
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    done()
}
function task_jshint1(done){
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    done()
}

//named task
// exports.task_jshint =  task_jshint

//default named tasks
// exports.default =  task_jshint

//export more than one task
// exports.default = gulp.series(task_jshint, task_jshint1)
// exports.default = gulp.parallel(task_jshint, task_jshint1)

exports.both = gulp.series(task_jshint, task_jshint1)