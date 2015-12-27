'use strict';

var _ = require('underscore');
var exec = require('child_process').exec;

var loadPath = process.argv[2] || process.cwd();
var regexp = "_\.\w*";
var unique = require('./collection');
var command = 'grep -R -e "' + regexp + '" ' + loadPath;
var options = { maxBuffer: 1024 * 5000 };

function parse(files) {
    // Remove last (empty) line.
    files.pop();

    files.forEach(function (result) {
        var parts = result.split(':');
        var filename = parts[0];
        var matcher = parts[1];

        var match = matcher.match(/_\.\w*(\.|\()/);

        if (match === null) {
            return;
        }

        var called = match[0];
        called = called.substr(2);
        called = called.substr(0, called.length - 1);

        // If it is simple string without any sens.
        if (called.length === 0) {
            return;
        }

        unique.increase(called);
    });
}

function grepHandler(error, filesString) {
    if (error) throw error;

    var files = filesString.split('\n');

    parse(files);

    unique.sort();
    unique.cut(100);
    unique.print(files.length);
}

module.exports = {
    parse: parse,
    setup: function () {
        exec(command, options, grepHandler);
    }
};
