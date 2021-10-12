// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
  }
  return product;
}

// run 'node index.js' in your terminal
// 5 should return 120
console.log(factorialize(5));

// Code Explanation
// Since the return values for the function will always be greater than or equal to 1, product is initialized at one. For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.

// For all numbers passed to the function which are greater than one, the simple for loop will decrement num by one each iteration and recalculate product down to the value 1.
