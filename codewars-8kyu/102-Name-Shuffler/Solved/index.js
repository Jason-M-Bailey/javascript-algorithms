// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('John McClane'); => "McClane John"

function nameShuffler(name) {
  var reversed = name.split(" ").reverse().join(" ");

  return reversed;
}

// run 'node index.js' in your terminal to test the results
console.log(`McClane John should be result: ${nameShuffler("John McClane")}`);

console.log(`John McClane should be result: ${nameShuffler("McClane John")}`);
