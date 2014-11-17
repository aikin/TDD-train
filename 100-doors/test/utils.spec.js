var utils = require('../src/utils');

describe('test count factor', function() {

    it('should error when parameter not be number or be 0', function() {
        expect(utils.countFactor('not be number')).toEqual('please input number');
        expect(utils.countFactor(0)).toEqual('not be 0');
    });

    it('should return right with parameter', function() {
        expect(utils.countFactor(1)).toBe(1);
        expect(utils.countFactor(4)).toBe(3);
        expect(utils.countFactor(5)).toBe(2);
        expect(utils.countFactor(10)).toBe(4);
        expect(utils.countFactor(12)).toBe(6);
        expect(utils.countFactor(81)).toBe(5);
    });
});