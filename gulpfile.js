const { src, dest, watch, series, parallel } = require('gulp');

function helloGulp(cb){
    console.log('Hello, GulpWorld');
    cb();
  }

  exports.hello = helloGulp;