// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  var a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }
  return a[a.length - 1];
}

console.log(`2 === ${stray([1, 1, 2])}`);
console.log(`3 === ${stray([17, 17, 3, 17, 17, 17, 17])}`);
console.log(`22 === ${stray([21, 21, 21, 21, 21, 21, 22])}`);