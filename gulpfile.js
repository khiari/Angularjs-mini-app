"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run a local web server
var open = require('gulp-open'); // open app in a web browser
var browserify =require('browserify'); 
var concat = require('gulp-concat');
var source =require("vinyl-source-stream");


var config={
    port:9005,
    devBaseUrl:'http://localhost',
    paths:{
        html:'./*.html',
        js: './app/js/*.js',
        css: "./app/css/app.css",
        dist: './dist',
        mainJs: './app/js/app.run.js',
        images: './app/img/*'

    }
}

// start local developement server

gulp.task('connect', function(){

    connect.server({
        root:['dist'],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true

    });

});


gulp.task('open',['connect'],function(){

  gulp.src('dist/index.html')
    .pipe(open({uri: config.devBaseUrl+':'+ config.port+'/'}));
});

gulp.task('html',function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){

    browserify(config.paths.mainJs)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist+ '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function(){

    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist+'/css'));
});

gulp.task('images', function(){

    gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist+'/images'))
    .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
})

/*gulp.task('lint', function(){

    return gulp.src(config.paths.js)
                .pipe(lint({config: 'eslint.config.json'}))
                .pipe(lint.format());
});
*/
gulp.task('watch', function(){

    gulp.watch(config.paths.html,['html']);
    gulp.watch(config.paths.js,['js']);
    gulp.watch(config.paths.css,['css']);
    
});


gulp.task('default', ['html','js','css', 'images','open','watch']);