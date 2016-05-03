#!/usr/local/bin/node

var arguments = process.argv;


var red = arguments[2];
var green = arguments[3];
var blue = arguments[4];

console.log("rgb:("+ red + "," + green + "," + blue +")");

var redDivisor    = parseInt(red/16);
var redRemainder  = parseInt(red%16);

var greenDivisor  = parseInt(green/16);
var greenRemainer = parseInt(green%16);

var blueDivisor   = parseInt(blue/16);
var blueRemainer  = parseInt(blue%16);

var hex = redDivisor.toString(16).toLocaleUpperCase() + redRemainder.toString(16).toLocaleUpperCase() +
          greenDivisor.toString(16).toLocaleUpperCase() + greenRemainer.toString(16).toLocaleUpperCase() +
          blueDivisor.toString(16).toLocaleUpperCase() + blueRemainer.toString(16).toLocaleUpperCase();

console.log("16进制:"+hex);