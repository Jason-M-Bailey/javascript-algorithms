// Eureka!

// Take a Number And Sum Its Digits Raised To The Consecutive Powers

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title. The next number in having this property is 135.

// In effect: 89 = 8^1 + 9^2
// 8^1 = 8
// 9^2 = 81

// 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  var arr = [];

  // for loop through the base array
  for (var i = a; i <= b; i++) {
    var sum = 0;

    // for loop through the individual numbers within the array, i.e. loop through 135 by looking at 1, 3, & 5
    for (var j = 0; j <= String(i).length; j++) {

      // sum adds up as you use the .pow function
      // parseInt(String...) converts the integer to a String so you can identify each number of the string
      // j + 1 refers to the index, i.e. for '135' 1[j + 1] = 1^1, 3[j + 1] = 3^2, 5[j + 1] = 5^3
      sum += Math.pow(parseInt(String(i)[j]), j + 1);

      // check if the sum is equal to the original number, if yes then push into the new array to be returned
      if (sum == i) arr.push(i);
    }
  }

  return arr;
}

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135]
console.log(sumDigPow(0, 140));
