var should                        = require('chai').should();
var unique                        = require('../src/unique');
var uniqueImplementWithIndexOf    = unique.uniqueImplementWithIndexOf;
var uniqueImplementWithHashObject = unique.uniqueImplementWithHashObject;

describe('#array uniqueImplementWithIndexOf', function() {
    'use strict';

    it('should return correct after uniqueImplementWithIndexOf', function() {

        uniqueImplementWithIndexOf('input string').should.to.equal('please input array');
        uniqueImplementWithIndexOf([]).should.to.eql([]);
        uniqueImplementWithIndexOf(['a']).should.to.eql(['a']);
        uniqueImplementWithIndexOf(['a', 'a']).should.to.eql(['a']);
        uniqueImplementWithIndexOf(['a', 'b', 'c', 'c', 'a']).should.to.eql(['a', 'b', 'c']);
        uniqueImplementWithIndexOf(['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]).should.to.eql(['a', 'b', 'c', '1', 0, 1, '']);
        uniqueImplementWithIndexOf([1, new Number(1)]).should.to.eql([1, new Number(1)]);
        uniqueImplementWithIndexOf(['1', new Number(1)]).should.to.eql(['1', new Number(1)]);
        uniqueImplementWithIndexOf([new String(1), new Number(1)]).should.to.eql([new String(1), new Number(1)]);
    });

    it('should return correct after uniqueImplementWithHashObject', function() {

        uniqueImplementWithHashObject('input string').should.to.equal('please input array');
        uniqueImplementWithHashObject([]).should.to.eql([]);
        uniqueImplementWithHashObject(['a']).should.to.eql(['a']);
        uniqueImplementWithHashObject(['a', 'b', 'c', 'c', 'a']).should.to.eql(['a', 'b', 'c']);
        uniqueImplementWithHashObject(['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]).should.to.eql(['a', 'b', 'c', '1', 0, 1, '']);
        uniqueImplementWithHashObject([1, new Number(1)]).should.to.eql([1, new Number(1)]);
        uniqueImplementWithHashObject(['1', new Number(1)]).should.to.eql(['1', new Number(1)]);
        //uniqueImplementWithHashObject([new String(1), new Number(1)]).should.to.eql([new String(1), new Number(1)]);
    });

});