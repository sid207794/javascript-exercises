const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, initial) => total+initial, 0);
};

const multiply = function(array) {
  return array.reduce((total, initial) => total*initial);
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } else if (num > 1) {
    product = 1;
    for (i=num; i>0; i--) {
      product *= i;
    }
    return product;
  }
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
