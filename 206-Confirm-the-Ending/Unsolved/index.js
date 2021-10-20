// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    // your code here
}

// run 'node index.js' in your terminal
console.log(`true === ${confirmEnding("Bastian", "n")}`);

console.log(`true === ${confirmEnding("Congratulation", "on")}`);

console.log(
  `true === ${confirmEnding("He has to give me a new name", "name")}`
);

console.log(`true === ${confirmEnding("Open sesame", "same")}`);

console.log(`true === ${confirmEnding("Abstraction", "action")}`);

console.log("********");
console.log(`false === ${confirmEnding("Connor", "n")}`);

console.log(
  `false === ${confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )}`
);

console.log(`false === ${confirmEnding("Open sesame", "sage")}`);

console.log(`false === ${confirmEnding("Open sesame", "game")}`);

console.log(
  `false === ${confirmEnding(
    "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
    "mountain"
  )}`
);
