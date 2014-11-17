function door(count, utils) {

    if (typeof count === 'object') {
        utils = count;
        count = 100;
    }

    if (typeof count !== 'number') return 'sorry, parameter must be number';

    var result = { opened: [], closed: [] };

    for (var i = 1; i <= count; i++) {

        var sqrt = Math.sqrt(i);
        if (sqrt === (sqrt | 0)) {
            result.opened.push(i);
        } else {
            result.closed.push(i);
        }
    }

    return result;
}

module.exports = door;