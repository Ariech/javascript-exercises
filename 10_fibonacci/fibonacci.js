const fibonacci = function(numberInSequence) {

    if(numberInSequence < 0) {
        return "OOPS";
    }

    if(numberInSequence === 0) {
        return 0;
    }

    let num1 = 0;
    let num2 = 1;

    for(let i = 2; i <= numberInSequence; i++) {
        let temp = num2;
        num2 = num2 + num1;
        num1 = temp;
    }

    return num2;
};
// Do not edit below this line
module.exports = fibonacci;
