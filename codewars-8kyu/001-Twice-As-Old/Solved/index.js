// Twice as Old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(`22 === ${twiceAsOld(36, 7)}`);
console.log(`5 === ${twiceAsOld(55, 30)}`);
console.log(`0 === ${twiceAsOld(42, 21)}`);
console.log(`20 === ${twiceAsOld(22, 1)}`);
console.log(`29 === ${twiceAsOld(29, 0)}`);
