var should   = require('chai').should();
var anagrams = require('../src/anagrams');

describe('test anagrams', function() {

    it('should input correct string', function() {
        anagrams(1234).should.to.equal('input must be string.');
        anagrams(true).should.to.equal('input must be string.');
        anagrams({spec: 'spec'}).should.to.equal('input must be string.');
        anagrams('').should.to.equal('input string must not be empty');
    });
});