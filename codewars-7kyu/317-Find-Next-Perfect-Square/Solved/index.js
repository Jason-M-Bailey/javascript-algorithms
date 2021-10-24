// Find the Next Perfect Square

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  // Math.sqrt = finds the square root of the provided number
  var number = Math.sqrt(sq);

  // Math.round() function returns the value of a number rounded to the nearest integer.
  // Math.pow() function returns the base to the exponent power, as in base^exponent.
  
  return Math.round(number) === number ? Math.pow(++number, 2) : -1;
}

// 121 --> 144
console.log(findNextSquare(121));

// 39 --> -1 since 39 is not a perfect square
console.log(findNextSquare(39));

// 625 --> 676
console.log(findNextSquare(625));

// 114 --> -1 since 114 is not a perfect square
console.log(findNextSquare(114));
