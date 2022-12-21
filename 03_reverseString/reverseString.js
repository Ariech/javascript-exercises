const reverseString = function(string) {
    let newString = "";
    string = string.split("")

    for(let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    return newString;
};

reverseString("123! abc!")

// Do not edit below this line
module.exports = reverseString;
