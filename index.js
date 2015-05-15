// author : xunuo <i@xunuo.com>
// thank : https://www.zybuluo.com/bornkiller/note/32907

var through = require('through-gulp'),
    docup = require('docup'),
    path = require('path')
    ;

function gulpDocUp(args) {
    
    // start stream
    var stream = through(function (file, encoding, callback) {

        // clone options from args
        var options = JSON.parse(JSON.stringify(args));

        // get file path
        options.path = file.path;

        // reset url with path
        options.codeUrl = options.codeUrl.replace('{filePath}',path.relative(file.cwd,file.path));

        // reset title with path
        options.title = options.title.replace('{fileName}',path.relative(file.cwd,file.path));

        // doc it down
        var docUpContent = docup(options);
        
        // set buffer
        file.contents = new Buffer(docUpContent);

        // output file
        this.push(file);

        callback();
    }, function (callback) {
        callback();
    });
    return stream;
};
// exporting the plugin
module.exports = gulpDocUp;