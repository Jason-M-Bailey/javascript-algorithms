// Series of integers from 0 to n

// Write a function that accepts a single argument and generates an array containing the integers from 0 to n inclusive.

// For example, generateIntegers(3) should return [0, 1, 2, 3].

function generateIntegers(n) {
  let integers = [];

  for (let i = 0; i <= n; i++) {
    console.log(i);
    integers.push(i);
  }

  return integers;
}

console.log(generateIntegers(0));

console.log(generateIntegers(3));
