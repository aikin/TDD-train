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

    it('', function() {

    });

    xit('should get 0 score when not knocks down pains on each 10 frames', function() {

        for (var i = 0; i < 20; i++) {
            game.roll(0);
        }

    });

});