const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod*num);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	if (num===0)
    return 1;
  return num*factorial(num-1);
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
