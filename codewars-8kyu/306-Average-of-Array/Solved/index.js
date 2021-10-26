// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
  var sum = 0;

  for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return Math.floor(sum / marks.length);
}

// run 'node index.js' in your terminal
console.log(`2 === ${getAverage([2, 2, 2, 2])}`);
console.log(`5 === ${getAverage([1, 10])}`);
console.log(`2 === ${getAverage([0, 0, 0, 10])}`);
