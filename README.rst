gulp-graph-tasks
================

Gulp.js module to graph task dependencies with graphviz.

Install
=======

::

     npm install --save-dev gulp-graph-tasks

Graph models
============

Module depends on GraphViz library, make sure you have `dot` command.
To plot tasks dependencies, execute following command from you repository:

::
    
    ./node_modules/.bin/gulp-graph-tasks | dot -Tpng > gulp-tasks.png

If you would like to use not default `gulpfile.js`, specify path to it as first argument of the command.
