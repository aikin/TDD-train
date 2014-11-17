function door(count) {

    count = count || 100;

    if (typeof count !== 'number') return 'sorry, parameter must be number';

    var doors  = [];
    var result = { opened: [], closed: [] };

    for (var i = 0; i < count; i++) {
        doors[i + 1] = false;
    }

    for (var m = 1; m <= count; m++) {
        for (var n = m - 1; n < count; n += m) {
            doors[n] = !doors[n];
        }
    }

    for (var j = 1; j <= count; j++) {
        if (doors[j - 1]) {
            result.opened.push(j);
        } else {
            result.closed.push(j);
        }
    }

    return result;
}

module.exports = door;