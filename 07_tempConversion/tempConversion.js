const convertToCelsius = function(tempFahr) {
  let temp = (tempFahr - 32) * (5 / 9)
  return Math.round(temp * 10) / 10
};

const convertToFahrenheit = function(tempCels) {
  let temp =  (tempCels * 1.8 + 32);
  return Math.round(temp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
