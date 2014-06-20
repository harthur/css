/*
 * Script to create a browser file out of this package.
 *
 * To run this file:
 *  `npm install browserify`
 *  `node build.js`
 */

var fs = require("fs"),
    browserify = require("browserify"),
    pkg = require("./package.json");

var outfile = './rework-css.js';

var bundle = browserify('./browser.js').bundle(function(err, src) {
  fs.writeFileSync(outfile, src);

  console.log("> " + outfile);
});
