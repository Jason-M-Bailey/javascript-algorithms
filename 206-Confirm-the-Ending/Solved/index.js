// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(`true === ${confirmEnding("Bastian", "n")}`);

console.log(`true === ${confirmEnding("Congratulation", "on")}`);

console.log(
  `true === ${confirmEnding("He has to give me a new name", "name")}`
);

console.log(`true === ${confirmEnding("Open sesame", "same")}`);

// Code Explanation
// First we use the slice method copy the string.
// In order to get the last characters in str equivalent to the target's length we use the slice method.

// The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// For example str.slice(10, 17) would return give me.
// In this case we only include one parameter which it will copy everything from the starting index.

// We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.

// Finally we compare the return result of slice to target and check if they have the same characters.

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
