/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0
  no-param-reassign: 0 */

'use strict';

// -- Vendor Modules
const { src, dest, parallel } = require('gulp')
    ;


// -- Local Modules
const config = require('./config')
    ;


// -- Local Constants
const { iconsdir } = config
    , { icons }    = config
    ;


// -- Local Variables


// -- Gulp Private Tasks

// Copy icons.
function doicons() {
  return src(icons)
    .pipe(dest(iconsdir))
  ;
}


// -- Gulp Public Task(s)
module.exports = parallel(doicons);
