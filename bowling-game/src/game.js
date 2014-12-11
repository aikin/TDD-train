function Game() {
    this._score = 0;

}

Game.prototype.roll = function(pins) {

    var regexp = /^\d+$/;

    if (typeof pins !== 'number' || !regexp.test(pins)) {
        return 'pins must be integer number type!';
    }

    this._score += pins;
};

Game.prototype.score = function() {
    return this._score;
};


module.exports = Game;