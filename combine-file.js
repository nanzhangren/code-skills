// This file is used for merging files which have same suffix.
// NodeJS is needed for executing this file.

const fs = require('fs');
var glob = require('glob');


function processFiles(sourceFiles, destFile) {
    var fileContent = [];
    // Like this: C:/text/*.js or C:/main/**/*.js
    var files = glob.sync(sourceFiles);
    if (files && files.length > 0) {
        files.forEach(function (filepath) {
            if (fs.lstatSync(filepath).isFile()) {
                var content = fs.readFileSync(filepath).toString();
                fileContent.push(content);
            }
        })
    }
    fileContent = fileContent.join('\n');
    fs.writeFileSync(destFile, fileContent);
}

var chartDirectory = './';
var fileSuffix = '.ts';

processFiles(chartDirectory + 'ooxml-models/*' + fileSuffix, chartDirectory + 'ooxml-model' + fileSuffix);
processFiles(chartDirectory + 'ooxml-readers/*' + fileSuffix, chartDirectory + 'ooxml-reader' + fileSuffix);
processFiles(chartDirectory + 'ooxml-writers/*' + fileSuffix, chartDirectory + 'ooxml-writer' + fileSuffix);