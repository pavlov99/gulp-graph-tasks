#!/usr/bin/env node

var gulp = require('gulp'),
  gulpfilePath = './gulpfile.js';

require(gulpfilePath);

for (var name in gulp.tasks) {
  console.log(name + ' -> {' + gulp.tasks[name].dep.join(' ') + '};');
}
