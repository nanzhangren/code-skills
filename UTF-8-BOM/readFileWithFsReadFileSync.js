// When the file encoding is UTF-8-BOM, the first char is '\uFEFF',
// so the first char like above should be deleted when you insert content to file's header.

var fs = require('fs');

// There is no special chart in file header.
var utf8Content = fs.readFileSync('aaa-utf8.json');

// There is the special chart '\uFEFF' in file header, 
// we need care about it when process with file content.
var utf8WithBOMContent = fs.readFileSync('aaa-utf8WithBOM.json');


// eg:
// 	var content = fs.readFileSync(fileName);
// 	content = content.toString();
// 	var firstChar = content[0], withBOM = firstChar === '\uFEFF';
// 	content = withBOM ? content.substr(1) : content;