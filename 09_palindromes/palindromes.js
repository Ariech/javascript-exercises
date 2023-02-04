const palindromes = function (word) {
    const processedWord = word.toLowerCase().replace(/[^a-z]+/g, '');

    return processedWord === processedWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
