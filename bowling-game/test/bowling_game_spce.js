var expect   = require('chai').expect;
var Game     = require('../src/game');

describe('test game', function() {

    var game;

    beforeEach(function() {
        game = new Game();
    });

    afterEach(function() {
        game = null;
    });

    it('should return error when roll pins not be integer number', function() {

        expect(game.roll('aa')).to.equal('pins must be integer number type!');
        expect(game.roll(true)).to.equal('pins must be integer number type!');
        expect(game.roll(10.11)).to.equal('pins must be integer number type!');
    });

});