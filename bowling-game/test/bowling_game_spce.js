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

    it('should get 0 score when not knocks down pins on each 10 frames', function() {

        rollSamePinsOnTimes(20, 0);
        expect(game.score()).to.equal(0);
    });

    it('should get 20 score when  knocks down pins be 1 on each 10 frames', function() {

        rollSamePinsOnTimes(20, 1);
        expect(game.score()).to.equal(20);
    });

    it('should get 22 score when knocks down have 1 spare', function() {

        rollSpare();
        game.roll(6);
        rollSamePinsOnTimes(17, 0);

        expect(game.score()).to.equal(22);
    });


    it('should get 28 score when knocks down have 1 strike', function() {

        rollStrike();
        game.roll(3);
        game.roll(5);
        rollSamePinsOnTimes(16, 0);
        expect(game.score()).to.equal(26);
    });

    it('should get 300 when knocks down perfect', function() {

        rollSamePinsOnTimes(12, 10);
        expect(game.score()).to.equal(300);
    });

    it('should throw error when once roll pins more than 10', function() {

        expect(game.roll(11)).to.equal('pins must be less than 10');
    });

    it('should throw error when twice addition than 10', function() {

        game.roll(7);
        expect(game.roll(7)).to.equal('twice pins addition must less 10');
    });


    function rollSamePinsOnTimes(n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    function rollSpare() {
        game.roll(4);
        game.roll(6);
    }

    function rollStrike() {
        game.roll(10);
    }

});