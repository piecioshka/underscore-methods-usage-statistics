'use strict';

var analyzer = require('../../../src/analyzer');

describe('General', function () {
    it('should be an object', function () {
        expect(analyzer).toEqual(jasmine.any(Object));
        expect(analyzer.setup).toEqual(jasmine.any(Function));
        expect(analyzer.parse).toEqual(jasmine.any(Function));
    });

    // TODO(piecioshka): more specs in here
});
