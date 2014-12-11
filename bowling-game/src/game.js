function Game() {

}

Game.prototype.roll = function(pins) {

    var regexp = /^\d+$/;


    if (typeof pins !== 'number' || !regexp.test(pins)) {
        return 'pins must be integer number type!';
    }
};


module.exports = Game;