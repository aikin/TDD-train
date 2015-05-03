var unique = function(array) {

    if ({}.toString.call(array) !== '[object Array]') {
        return 'please input array';
    }

    var uniq = [];
    var repeat = [];

    for (var i = 0, maxL = array.length; i < maxL; i++) {

        var item = array[i];
        if (uniq.indexOf(item) === -1) {
            uniq.push(item);
            continue;
        }
        repeat.push(item);

    }

    return uniq
};

module.exports = unique;