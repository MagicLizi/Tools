#!/usr/local/bin/node
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var arguments = process.argv;

var filePath = arguments[2];
var dirName = path.dirname(filePath);
var suffix = path.extname(filePath);
console.log("修改文件"+filePath);

var stream = fs.createReadStream(filePath);
var fsHash = crypto.createHash('md5');

stream.on('data', function(d) {
    fsHash.update(d);
});

stream.on('end', function() {
    var md5 = fsHash.digest('hex');
    console.log("文件的MD5是：%s", md5);
    console.log("文件后缀:%s",suffix);
    var toFilePath = path.join(dirName,md5+suffix);
    console.log("修改为:"+toFilePath);
    fs.rename(filePath,toFilePath,function(err)
    {

    });
});


