'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', function () {
   
   return gulp.src([
     'src/**/*.ngfactory.ts',
     'src/**/*.js',
     'src/**/*.d.ts',
     'src/**/*.js.map',
     'src/**/*.metadata.json',
     'src/**/*.ngsummary.json',
     'test/**/*.js',
     'test/**/*.map',
     'test/**/*.d.ts'
   ]).pipe(clean()); 
});

