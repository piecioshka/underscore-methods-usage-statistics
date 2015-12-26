var analyzer = require('../../lib/analyzer');

describe('General', function () {
    it('should be an object', function () {
        expect(analyzer).toEqual(jasmine.any(Object));
        expect(analyzer.setup).toEqual(jasmine.any(Function));
        expect(analyzer.parse).toEqual(jasmine.any(Function));
    });
});
