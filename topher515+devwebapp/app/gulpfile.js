var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var less = require('gulp-less');
// var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
var del = require('del');


var paths = {
  // Src
  coffee: ['static-src/js/*.coffee'],
  images: ['static-src/img/*'],
  less: ['static-src/css/*.less'],
  // External
  externalScripts: ['static-lib/js/*.js'],
  externalImages: ['static-lib/img/*'],
  externalCss: ['static-lib/css/*.css'],
};


gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});


gulp.task('dev-scripts', ['clean'], function() {
  return gulp.src(paths.coffee)
    .pipe(coffee())
    .pipe(gulp.dest('build/js'));
});

gulp.task('dev-less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    // .pipe(rename("blah.less.css"))
    .pipe(gulp.dest('build/css'));
});

gulp.task('dev-images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});


// External stuff
gulp.task('external-scripts', ['clean'], function() {
  return gulp.src(paths.externalScripts)
    .pipe(gulp.dest('build/js'));
});
gulp.task('external-img', ['clean'], function() {
  return gulp.src(paths.externalImages)
    .pipe(gulp.dest('build/img'));
});
gulp.task('external-css', ['clean'], function() {
  return gulp.src(paths.externalCss)
    .pipe(gulp.dest('build/css'));
});


gulp.task('dev-once', function() {
  gulp.start('dev-scripts');
  gulp.start('dev-less');
  gulp.start('dev-images');
  // External
  gulp.start('external-scripts');
  gulp.start('external-images');
  gulp.start('external-css');
});

gulp.task('dev-watch', function() {
  gulp.watch(paths.scripts, ['dev-scripts']);
  gulp.watch(paths.less, ['dev-less']);
  gulp.watch(paths.images, ['dev-images']);
  // External
  gulp.watch(paths.externalScripts, ['external-scripts']);
  gulp.watch(paths.externalCss, ['external-css']);
  gulp.watch(paths.externalImages, ['external-images']);
});



gulp.task('default', function() {
  gulp.start('dev-once');
  gulp.start('dev-watch');
});



// gulp.task('scripts', ['clean'], function() {
//   // Minify and copy all JavaScript (except vendor scripts)
//   // with sourcemaps all the way down
//   return gulp.src(paths.scripts)
//     .pipe(sourcemaps.init())
//       .pipe(coffee())
//       .pipe(uglify())
//       .pipe(concat('all.min.js'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('build/js'));
// });
