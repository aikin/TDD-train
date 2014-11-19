var should   = require('chai').should();
var anagrams = require('../src/anagrams');

describe('test anagrams', function() {

    it('should input correct string', function() {

        anagrams(1234).should.to.equal('input must be string.');
        anagrams(true).should.to.equal('input must be string.');
        anagrams({spec: 'spec'}).should.to.equal('input must be string.');
        anagrams('').should.to.equal('input string must not be empty.');
    });

    it('should return all potential anagrams', function() {

        anagrams('a').should.to.eql(['a']);
        anagrams('ai').should.to.have.length(2);
        anagrams('ai').should.to.eql(['ai', 'ia']);
        anagrams('aik').should.to.have.length(6);
        anagrams('aik').should.to.eql(['aik', 'aki', 'iak', 'ika', 'kia', 'kai']);
        anagrams('ai,').should.to.have.length(6);
        anagrams('ai,').should.to.eql(['ai,', 'a,i', 'ia,', 'i,a', ',ia', ',ai']);
        var expect = [
            'biro', 'bior', 'brio', 'broi', 'bori', 'boir',
            'ibro', 'ibor', 'irbo', 'irob', 'iorb', 'iobr',
            'ribo', 'riob', 'rbio', 'rboi', 'robi', 'roib',
            'oirb', 'oibr', 'orib', 'orbi', 'obri', 'obir'
        ];
        anagrams('biro').should.to.have.length(expect.length);
        anagrams('biro').should.to.eql(expect);

    });
});