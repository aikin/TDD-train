function Game() {
    this._rolls       = [];
    this._currentRoll = 0;
}

Game.prototype.roll = function(pins) {

    var regexp = /^\d+$/;

    if (typeof pins !== 'number' || !regexp.test(pins)) {
        return 'pins must be integer number type!';
    }

    this._rolls[this._currentRoll++] = pins;
};

Game.prototype.score = function() {

    var score      = 0;
    var frameIndex = 0;

    for (var frame = 0; frame < 10; frame++) {
        if (this._isStrike(frameIndex)) {
            score += 10 + this._strikeBonus(frameIndex);
            frameIndex++;

        } else if (this._isSpare(frameIndex)) {
            score += 10 + this._spareBonus(frameIndex);
            frameIndex += 2;

        } else {
            score += this._sumOfBallsInFrame(frameIndex);
            frameIndex += 2;
        }
    }
    return score;
};

Game.prototype._isSpare = function(frameIndex) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
};

Game.prototype._isStrike = function(frameIndex) {
    return this._rolls[frameIndex] === 10;
};


Game.prototype._sumOfBallsInFrame = function(frameIndex) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
};

Game.prototype._spareBonus = function(frameIndex) {
    return this._rolls[frameIndex + 2];
};

Game.prototype._strikeBonus = function(frameIndex) {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
};

module.exports = Game;