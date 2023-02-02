const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	// let sum = 0;

  // for (let i = 0; i< array.length; i++ ) {
  //   sum += array[i];
  // }

  // return sum;

  const sum = array.reduce((total, currentValue) =>  total + currentValue, 0);
  
  return sum;
};

const multiply = function(array) {
  const multiply = array.reduce((total, currentValue) => total * currentValue);

  return multiply;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if(a === 0) return 1;

  let factorialSum = 1;

	for(let i = 1; i <= a; i++) {
    factorialSum *= i;
  }

  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
