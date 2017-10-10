var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js','src/**/*.js'];

gulp.task('inject'
    , function () {
    return nodemon;
  var wiredep = require('wiredep').stream(options)
      .on('restart',function (ev) {
          console.log("Restarting...");

      })
  var inject = require('gulp-inject');
  var injectsrc = gulp.src(['./public/css/*.css','./public/js/*.js'],{read: false});

  var options = {
      bowerJson: require('./bower.json'),
      directory: './public/lib',
      ignorePath: '../../public'
  }

  var injectOptions = {
      ignorePath: '/public'
  }

  return gulp.src('./src/views/*.html')
      .pipe(wiredep(options))
      .pipe(inject(injectsrc, injectOptions))
      .pipe(gulp.dest('./src/views'));
});

gulp.task('serve',['inject'],function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT' : 3000
        },
        watch: jsFiles
    }

    return nodemon(options)
        .on('restart',function (ev) {
            console.log("Restarting...");

        })
})