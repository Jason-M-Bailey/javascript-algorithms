var add = function(num1, num2) {
  return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

var multiply = function(num1, num2) {
  return num1 * num2;
};

var divide = function(num1, num2) {
  return num1 / num2;
};

// run 'node arithmetic.js' in your terminal or open test.html with live server

// result should equal 9
console.log(add(3, 6));

// result should equal -3
console.log(subtract(3, 6));

// result should equal 24
console.log(multiply(3, 6));

// result should equal 0.5
console.log(divide(3, 6));
