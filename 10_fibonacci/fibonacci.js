const fibonacci = function(numberInSequence) {
    if(numberInSequence < 0) {
        return "OOPS";
    }

    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    for(let i = 1; i < numberInSequence; i++) {
        num3 = num2 + num1; 
        num1 = num2;
        num2 = num3
    }

    return num3;
};
// Do not edit below this line
module.exports = fibonacci;
