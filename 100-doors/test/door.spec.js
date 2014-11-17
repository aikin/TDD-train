var door = require('../src/door');

describe('use 100 doors when input doors be empty', function() {

    var doors;
    beforeEach(function() {
         doors = door();
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

        expect(door('not be number')).toEqual('sorry, parameter must be number');
    });

    it('should return right opened doors for parameter', function() {

        expect(door(10).opened.toString()).toBe([1, 4, 9].toString());
        expect(door(15).opened.toString()).toBe([1, 4, 9].toString());
        expect(door(16).opened.toString()).toBe([1, 4, 9, 16].toString());
        expect(door(24).opened.toString()).toBe([1, 4, 9, 16].toString());
        expect(door(40).opened.toString()).toBe([1, 4, 9, 16, 25, 36].toString());
        expect(door(120).opened.toString()).toBe([1, 4, 9, 16, 25, 36, 49, 64, 81, 100].toString());
        expect(door(121).opened.toString()).toBe([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121].toString());
    });
});