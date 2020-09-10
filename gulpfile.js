const gulp        = require("gulp");
const cleanCSS    = require("gulp-clean-css");
const browserSync = require("browser-sync");
const concat      = require("gulp-concat");
const minify      = require("gulp-minify");

function minifyCss(){
  return gulp.src("./*.css")
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
}

function minifyOtherCss(){
  return gulp.src("./css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
}

function minifyJs(){
  return gulp.src("./js/*.js")
    .pipe(minify())
    .pipe(gulp.dest('js'));
}

function watch(){
  browserSync.init({
    server: {
      baseDir : "./"
    }
  });
  gulp.watch("./*.css", minifyCss);
  gulp.watch("./js/*.js", minifyJs);
  gulp.watch("./").on("change", browserSync.reload);
}

// exports.style = style;
exports.watch = watch;
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
exports.minifyOtherCss = minifyOtherCss;