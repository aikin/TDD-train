var door = require('../src/door');

describe('100 doors', function() {

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