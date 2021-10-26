// Series of integers from m to n

// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

function generateIntegers(m, n) {
  var integers = [];

  for (let i = m; i <= n; i++) {
    integers.push(i);
  }

  return integers;
}

// should return [2, 3, 4, 5]
console.log(generateIntegers(2, 5));

// another solution is to use a while loop

// while(m <= n) {
//     arr.push(m);
//     m++;
//   }
