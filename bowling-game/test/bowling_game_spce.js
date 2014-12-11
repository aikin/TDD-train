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

    it('should get 0 score when not knocks down pains on each 10 frames', function() {

        for (var i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).to.equal(0);
    });

    it('should get 20 score when  knocks down pains be 1 on each 10 frames', function() {

        for (var i = 0; i < 20; i++) {
            game.roll(1);
        }
        expect(game.score()).to.equal(20);
    });

});