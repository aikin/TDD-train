var should   = require('chai').should();
var unique   = require('../src/unique');

describe('#array unique', function() {
    'use strict';

    it('should return correct after unique', function() {

        unique('input string').should.to.equal('please input array');
        unique([]).should.to.eql([]);
        unique(['a']).should.to.eql(['a']);
        unique(['a', 'b', 'c', 'c', 'a']).should.to.eql(['a', 'b', 'c']);
        unique(['a', 'b', 'c', '1', 0, 'c', 1, '', 1, 0]).should.to.eql(['a', 'b', 'c', '1', 0, 1, '']);
    });

});