/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0,
  object-curly-newline: 0 */

'use strict';

// -- Vendor Modules
const { src, dest, series, parallel } = require('gulp')
    , del = require('del')
    ;


// -- Local Modules
const config = require('./config')
    ;


// -- Local Constants
const { dist }     = config
    , { iconsdir } = config
    ;


// -- Local Variables


// -- Gulp Private Tasks

// Removes the previous dist.
function deldist(done) {
  del.sync(dist);
  done();
}

// Copies README and LICENSE.
function doskeleton() {
  return src(['README.md', 'LICENSE.md'])
    .pipe(dest(dist))
  ;
}

// Copies Icons.
function cpicons() {
  return src(`${iconsdir}/**/*`)
    .pipe(dest(`${dist}/icons`))
  ;
}


// -- Gulp Public Task(s):

module.exports = series(
  deldist,
  parallel(doskeleton, cpicons),
);
