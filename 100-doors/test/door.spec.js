var door   = require('../src/door');
var utils  = require('../src/utils');

describe('use 100 doors when input doors be empty', function() {

    var doors;
    beforeEach(function() {
         doors = door(utils);
    });

    afterEach(function() {
        doors = null;
    });

    it('should be return object has two attr', function() {
        expect(typeof doors).toBe('object');
        expect(doors.opened instanceof Array).toBe(true);
        expect(doors.closed instanceof Array).toBe(true);
    });

    it('should opened doors count be 10, closed doors count be 90', function() {
        expect(doors.opened.length).toBe(10);
        expect(doors.closed.length).toBe(90);
    });

    it('should opened doors 1, 4, 9, 16, 25, 36, 49, 64, 81, 100', function() {
        expect(doors.opened.toString()).toBe([1, 4, 9, 16, 25, 36, 49, 64, 81, 100].toString());
    });

});

describe('fetch right result when input doors count', function() {

    it('should tip when parameter not be number', function() {

        expect(door('not be number', utils)).toEqual('sorry, parameter must be number');
    });

    it('should return right opened doors for parameter', function() {

        expect(door(10, utils).opened.toString()).toBe([1, 4, 9].toString());
        expect(door(15, utils).opened.toString()).toBe([1, 4, 9].toString());
        expect(door(16, utils).opened.toString()).toBe([1, 4, 9, 16].toString());
        expect(door(24, utils).opened.toString()).toBe([1, 4, 9, 16].toString());
        expect(door(40, utils).opened.toString()).toBe([1, 4, 9, 16, 25, 36].toString());
        expect(door(120, utils).opened.toString()).toBe([1, 4, 9, 16, 25, 36, 49, 64, 81, 100].toString());
        expect(door(121, utils).opened.toString()).toBe([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121].toString());
    });
});