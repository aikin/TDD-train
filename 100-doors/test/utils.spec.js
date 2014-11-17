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

describe('test sqrt return integer', function() {

    it('should error when parameter not be number or be 0', function() {
        expect(utils.floorAfterSqrt('not be number')).toEqual('please input number');
    });

    it('should return right with parameter', function() {
        expect(utils.floorAfterSqrt(1)).toBe(1);
        expect(utils.floorAfterSqrt(3)).toBe(1);
        expect(utils.floorAfterSqrt(14)).toBe(3);
        expect(utils.floorAfterSqrt(36)).toBe(6);
        expect(utils.floorAfterSqrt(80)).toBe(8);
        expect(utils.floorAfterSqrt(100)).toBe(10);
        expect(utils.floorAfterSqrt(121)).toBe(11);
    });
});