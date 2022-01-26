/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const pack = require('../package.json');


// -- Local Constants
const libname = 'SVGIcons'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    ;


// -- Local Variables


// -- Main

module.exports = {
  ES6GLOB: '$__ES6GLOB',
  dist: './_dist',
  libdir: './lib',
  libname,
  name,
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  iconsdir: './icons',
  icons: './src/icons/**/*',

  /* eslint-disable no-multi-spaces */
  src: [],
  /* eslint-enable no-multi-spaces */

  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from ES6lib v1.0.13.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
