function countFactor(num) {

    if (typeof num !== 'number') return 'please input number';
    if (num === 0) return 'not be 0';

    if (num === 1) return 1;

    var factor = 1;
    for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            factor++;
        }
    }

    factor = factor * 2;

    if (Math.floor(Math.sqrt(num)) === Math.sqrt(num)) {
        factor -= 1;
    }

    return factor;
}

module.exports = {
    countFactor: countFactor
};