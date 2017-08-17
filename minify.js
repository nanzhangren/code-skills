const fs = require('fs');
const path = require('path');
const child_process = require('child_process');


console.info('\nNow beginning compressing, please wait ...');

var fileString = 'chart-model';
var fileName = getFileName('./scripts/datamodel', fileString);
minifyFile(fileName, fileString);
console.info('Compress chart model DONE!');

fileString = 'chart-reader';
fileName = getFileName('./scripts/xlsx-io/reader', fileString);
minifyFile(fileName, fileString);
console.info('Compress chart reader DONE!');

fileString = 'chart-writer';
fileName = getFileName('./scripts/xlsx-io/writer', fileString);
minifyFile(fileName, fileString);
console.info('Compress chart writer DONE!');

console.info('\nAll compress DONE!');


function minifyFile(fileName, fileString) {
    var uglifyModulePath = path.resolve('./node_modules/uglify-js');
    var uglifyPath = ' "' + uglifyModulePath + '\\bin\\uglifyjs" ';
    var sourcePath = fileName.toString();
    var outputPath = path.resolve('./build/output/scripts') + '\\' + fileString + '.min.js';
    var args = ' --compress "unsafe=true,unused=false,screw-ie8=true,hoist_funs=false,hoist_vars=true" ' +
        ' --beautify "beautify=false,ascii-only=true"' + // this is for convert string to unicode
        ' --mangle ' +                                   // this is for rename long name to short name
        ' -o "' + outputPath + '"' +
        ' -- "' + sourcePath + '" ';
    var command = 'node ' + uglifyPath + args;
    // '\x1b[32m' means change log color to green. 0m is back to black.
    console.info('\nCompressing: ', '\x1b[32m', sourcePath, '\x1b[0m');
    //console.info('command: ' + command);
    child_process.execSync(command);
}

function getFileName(filePath, fileName) {
    var destFilePath = path.resolve(filePath);
    return destFilePath + '\\' + fileName + '.js';
}