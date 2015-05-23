#!/usr/bin/env node

var gulp = require('gulp'),
  path = require('path'),
  gulpfilePath = path.resolve(process.cwd(), process.argv[2] || 'gulpfile.js');

require(gulpfilePath);

console.log('digraph GulpTasks {');

for (var name in gulp.tasks) {
  for (var i = 0; i < gulp.tasks[name].dep.length; i++) {
    console.log('  "' + name + '" -> "' + gulp.tasks[name].dep[i] + '";');
  }
}

console.log('}');
