// Bonuses

// John wants to give a total bonus of $851 to his three employees taking fairly as possible into account their number of days of absence during the period under consideration. Employee A was absent 18 days, B 15 days, and C 12 days.

// The more absences, the lower the bonus ...

// Task:
// Given an array arr (numbers of days of absence for each employee) and a number s (total bonus) the function bonus(arr, s) will follow John's way and return an array of the fair bonuses of all employees in the same order as their numbers of days of absences.

// s and all elements of arr are positive integers.

bonus = function (arr, s) {
  var bonuses = [];
  var arrSum = 0;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];
    arrSum += currentNumber;
  }

  console.log(arrSum);

  for (let i = 0; i < arr.length; i++) {
    // figure out arr[i] % of bonus pool by
    // divide arr[i] / arrSum
    console.log((1 - arr[i] / arrSum) / 2);

    // multiply by s
    console.log(((1 - arr[i] / arrSum) / 2) * s);
    // push into bonuses
    // bonuses.push(arr[i] / arrSum * s);
    console.log("*****");
  }

  return bonuses;
};

console.log(bonus([18, 15, 12], 851));
// bonus([18, 15, 12], 851) -> [230, 276, 345]

// bonus([30, 27, 8, 14, 7], 34067) -> [2772, 3080, 10395, 5940, 11880]
// Notes
// There are only integers in the kata so no need to use floats.
// See Example Test Cases for more examples.
// Please ask before translating.
// In some tests the number of elements of arr can be big.
