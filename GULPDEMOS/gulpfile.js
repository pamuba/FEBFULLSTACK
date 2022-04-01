let gulp = require('gulp')
let jshint = require('gulp-jshint')
let cleanCSS = require('gulp-clean-css')
let rename = require('gulp-rename')
//sass compiler that gulp-sass uses
let sass = require('gulp-sass')(require('sass'))

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
// function task_jshint(done){
//     gulp.src('js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     done()
// }
// function task_jshint1(done){
//     gulp.src('js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     done()
// }

//named task
// exports.task_jshint =  task_jshint

//default named tasks
// exports.default =  task_jshint

//export more than one task
// exports.default = gulp.series(task_jshint, task_jshint1)
// exports.default = gulp.parallel(task_jshint, task_jshint1)

// exports.both = gulp.series(task_jshint, task_jshint1)


//////////////////////////////////////////////////////////////


//gulp minify + rename css files
// const styleSRC = './src/scss/style.css'
// const styleDEST = './dist/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//         .pipe(cleanCSS())
//         .pipe(rename({suffix:'.min'}))
//         .pipe(gulp.dest(styleDEST))
//     done()
// });


// gulp.task('minify-css', (done) => {
//     gulp.src(styleSRC)
//       .pipe(cleanCSS({debug: true}, (details) => {
//         console.log(`${details.name}: ${details.stats.originalSize}`);
//         console.log(`${details.name}: ${details.stats.minifiedSize}`);
//       }))
//     .pipe(rename({suffix:'.min'}))
//     .pipe(gulp.dest(styleDEST))
//     done()
// });

//////////////////////////////////////////////////////////////////////////

//sass compile + minify + rename
const styleSRC = './src/scss/style.scss'
const styleDEST = './dist/css'

gulp.task('styles', function(done){
    gulp.src(styleSRC)
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(cleanCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(styleDEST));
    done()
});
