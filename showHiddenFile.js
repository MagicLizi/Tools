#!/usr/local/bin/node

var exec = require("child_process").exec;

exec("defaults write com.apple.finder AppleShowAllFiles -bool " + process.argv[2],function(error, stdout, stderr)
{
    exec("killall Finder");
});