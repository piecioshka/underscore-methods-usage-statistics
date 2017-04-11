'use strict';

var collection;

beforeEach(function () {
    collection = require('../../../src/collection');
});

describe('General', function () {
    it('should be an object', function () {
        expect(collection).toEqual(jasmine.any(Object));
        expect(collection.increase).toEqual(jasmine.any(Function));
        expect(collection.cut).toEqual(jasmine.any(Function));
        expect(collection.sort).toEqual(jasmine.any(Function));
        expect(collection.print).toEqual(jasmine.any(Function));
    });

    describe('Method', function () {
        describe('increase:', function () {
            it('should increase empty collection', function () {
                collection.increase('test');
                expect(collection.list[0].value).toEqual('test');
                expect(collection.list[0].quantity).toEqual(1);
            });

            it('should increase not empty collection', function () {
                collection.increase('test');
                expect(collection.list[0].value).toEqual('test');
                expect(collection.list[0].quantity).toEqual(2);
            });

            it('should increase not empty collection (other property)', function () {
                collection.increase('foobar');
                expect(collection.list[1].value).toEqual('foobar');
                expect(collection.list[1].quantity).toEqual(1);
            });
        });

        describe('cut: ', function () {
            it('should failed when pass bad param', function () {
                expect(collection.cut(null)).toEqual(undefined);
            });

            it('should failed when passed number is bigger than collection size', function () {
                expect(collection.cut(1000000)).toEqual(undefined);
            });

            it('should reduce collection size', function () {
                expect(collection.list.length).toEqual(2);
                collection.cut(1);
                expect(collection.list.length).toEqual(1);
            });
        });

        describe('sort: ', function () {
            it('should modify collection', function () {
                collection.increase('test2');
                collection.increase('test2');
                collection.increase('test2');
                var list = collection.sort();
                expect(list).not.toEqual(collection.list);
            });
        });

        describe('print: ', function () {
            it('should run console.log', function () {
                spyOn(console, 'log');
                collection.print();
                expect(console.log).toHaveBeenCalled();
            });
        });
    });
});
