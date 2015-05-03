exports.uniqueImplementWithIndexOf = function(array) {

    if ({}.toString.call(array) !== '[object Array]') {
        return 'please input array';
    }

    var uniq   = [];
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


exports.uniqueImplementWithHashObject = function(array) {

    if ({}.toString.call(array) !== '[object Array]') {
        return 'please input array';
    }

    var uniq   = [];
    var hash   = {};
    var repeat = [];

    for (var i = 0, maxL = array.length; i < maxL; i++) {

        var item = array[i];
        var key = typeof(item) + item;       //TODO: must extract identification key generator method
        if (hash[key] !== 1) {
            uniq.push(item);
            hash[key] = 1;
            continue;
        }
        repeat.push(item);
    }

    return uniq;
};