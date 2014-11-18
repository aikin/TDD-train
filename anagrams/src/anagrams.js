function anagrams(word) {

    if ((typeof word) !== 'string') return 'input must be string.';
    if (word === '') return 'input string must not be empty';
}

module.exports = anagrams;