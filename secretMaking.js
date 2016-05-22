#!bash /usr/local/bin/node

var crypto = require("crypto");
var fs = require("fs");
var pem = fs.readFileSync('test.key');
var key = pem.toString('ascii');
var secretString = "lizi";
//哈希加密字符串 SHA1比较安全
var sha1 = crypto.createHash('sha1');

sha1.update(secretString);

var result = sha1.digest('hex');

console.log(result);

//HMAC 密钥相关哈希
var sha2 = crypto.createHmac('sha1',key);

sha2.update(secretString);

var result1 = sha2.digest('hex');

console.log(result1);

//对称加密
var cipher = crypto.createCipher('blowfish',key);

cipher.update('lizi','utf8','hex');

var result2 = cipher.final('hex');

console.log(result2);

//对称解密
var decipher = crypto.createDecipher('blowfish',key);

decipher.update(result2,'hex','utf8');

var result3 = decipher.final('utf8');

console.log(result3);


