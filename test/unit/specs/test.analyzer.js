'use strict';

var analyzer = require('../../../src/analyzer');
var collection = require('../../../src/collection');
var childProcess = require('child_process');

describe('General', function () {
    var originalExecFile;
    var originalArgv2;

    beforeEach(function () {
        originalExecFile = childProcess.execFile;
        originalArgv2 = process.argv[2];
    });

    afterEach(function () {
        childProcess.execFile = originalExecFile;
        process.argv[2] = originalArgv2;
        delete require.cache[require.resolve('../../../src/analyzer')];
        collection.list.length = 0;
    });

    it('should be an object', function () {
        expect(analyzer).toEqual(jasmine.any(Object));
        expect(analyzer.setup).toEqual(jasmine.any(Function));
        expect(analyzer.parse).toEqual(jasmine.any(Function));
    });

    it('should parse grep output into underscore method statistics', function () {
        analyzer.parse([
            'lib/demo.js: _.map(',
            'lib/demo.js: _.filter(',
            'lib/demo.js: _.map(',
            ''
        ]);

        expect(collection.list).toEqual([
            { value: 'map', quantity: 2 },
            { value: 'filter', quantity: 1 }
        ]);
    });

    it('should invoke grep with a literal path operand', function () {
        var pathArg = '-src';
        var captured;

        process.argv[2] = pathArg;
        childProcess.execFile = function (command, args, options, callback) {
            captured = {
                command: command,
                args: args,
                options: options,
                callback: callback
            };

            callback(null, 'lib/demo.js: _.map(\n');
        };

        var customAnalyzer = require('../../../src/analyzer');
        customAnalyzer.setup();

        expect(captured.command).toEqual('grep');
        expect(captured.args[0]).toEqual('-R');
        expect(captured.args[1]).toEqual('-e');
        expect(captured.args[2]).toEqual(jasmine.any(String));
        expect(captured.args[3]).toEqual('--');
        expect(captured.args[4]).toEqual(pathArg);
        expect(captured.options).toEqual({ maxBuffer: 1024 * 5000 });
    });
});
