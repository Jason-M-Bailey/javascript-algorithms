// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

// run 'node index.js' in your terminal
console.log(`${reverseWords("This is an example!")} === sihT si na !elpmaxe`);

console.log(`${reverseWords("double  spaces")} === elbuod  secaps`);

console.log(`${reverseWords("a b c d")} === a b c d`);

console.log(
  `${reverseWords("double  spaced  words")} === elbuod  decaps  sdrow`
);
