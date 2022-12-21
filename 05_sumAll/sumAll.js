const sumAll = function(numberOne, numberTwo) {
    let sum = 0;

    if(typeof(numberOne) !== 'number' || typeof(numberTwo) !== 'number'  || numberOne < 0 || numberTwo < 0) {
        return "ERROR";
    }

    if(numberOne > numberTwo) {
        let temp = numberOne;
        numberOne = numberTwo;
        numberTwo = temp;
    }

    for(let i = numberOne; i <= numberTwo; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(4,1))

// Do not edit below this line
module.exports = sumAll;
