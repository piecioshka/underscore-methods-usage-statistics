var collection = require('../../lib/collection');

describe('General', function () {
    it('should be an object', function () {
        expect(collection).toEqual(jasmine.any(Object));
        expect(collection.increase).toEqual(jasmine.any(Function));
        expect(collection.cut).toEqual(jasmine.any(Function));
        expect(collection.sort).toEqual(jasmine.any(Function));
        expect(collection.print).toEqual(jasmine.any(Function));
    });
});
