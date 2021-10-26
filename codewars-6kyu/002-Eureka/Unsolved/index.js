// Eureka!

// Take a Number And Sum Its Digits Raised To The Consecutive Powers

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title. The next number in having this property is 135.

// In effect: 89 = 8^1 + 9^2
// 8^1 = 8
// 9^2 = 81

// 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  // your code here
}

// should return = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135]
console.log(sumDigPow(0, 140));
