function anagrams(word) {

    if ((typeof word) !== 'string') return 'input must be string.';
    if (word === '') return 'input string must not be empty.';

    var letters = word.split('');
    var result  = [];

    function swap(letters, i, letterIndex) {
        if (letterIndex === i) return;
        var tmp;
        tmp                  = letters[i];
        letters[i]           = letters[letterIndex];
        letters[letterIndex] = tmp;
    }

    (function permute(letterIndex) {

        for (var i = letterIndex, lettersLength = letters.length; i < lettersLength; i++) {

            swap(letters, i, letterIndex);

            if (letterIndex + 1 < lettersLength) {
                permute(letterIndex + 1);
            } else {
                result.push(letters.join(''));
            }

            swap(letters, i, letterIndex);
        }
    }(0));

    return result;

}

module.exports = anagrams;