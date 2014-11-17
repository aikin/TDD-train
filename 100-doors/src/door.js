function door() {

    var doors  = [];
    var result = { opened: [], closed: [] };

    for (var i = 0; i < 100; i++) {
        doors[i + 1] = false;
    }

    for (var m = 1; m <= 100; m++) {
        for (var n = m - 1; n < 100; n += m) {
            doors[n] = !doors[n];
        }
    }

    for (var j = 1; j <= 100; j++) {
        if (doors[j - 1]) {
            result.opened.push(j);
        } else {
            result.closed.push(j);
        }
    }

    return result;
}

module.exports = door;