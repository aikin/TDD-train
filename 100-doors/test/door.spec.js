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

});