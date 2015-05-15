# gulp-docup

gulp-docup is a plugin to [docup](https://github.com/xunuo/docup) :)

## Install

```
npm install gulp-docup gulp-rename
```

## Usage(in gulpfile.js)

```javascript
var gulp = require('gulp'),
    gulpDocUp = require('gulp-up'),
    rename = require('gulp-rename')
    ;

gulp.task('gulpDocUp', function(){
    // 'html' or 'md'
    var outputType = 'html';
    gulp.src('./*.js')
    .pipe(gulpDocUp({
        // {fileName} will replace by file name, define for docUp.
        title: 'API documentation / {fileName}',    
        // {filePath} will replace by file path, define for docUp.
        codeUrl: 'https://github.com/xxx/xxx/blob/master/{filePath}',
        // topic group type , define for docUp.
        toc: 'categories', 
        // the outputType : 'html' or 'md' , 'md' default.
        type : outputType,
        // [optional] define the html template, 'default' default.
        // htmlStyle : 'default'
        // [optional] or DIY your template, <%- title %> & <%- htmlContent %> will be relaced.
        // htmlTpl : '<!DOCTYPE html><html><head><title><%- title %></title><head><body><%- htmlContent %></body></html>'
    }))
    .pipe(rename({
        extname: '.' + outputType
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('default', ['gulpDocUp']);
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
