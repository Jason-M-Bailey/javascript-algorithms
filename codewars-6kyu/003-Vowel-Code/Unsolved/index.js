// Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1, e -> 2, i -> 3, o -> 4, u -> 5

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

function encode(string) {
  // your code here
}

function decode(string) {
  // your code here
}

console.log(`h2ll4 === ${encode("hello")}`);
console.log(`H4w 1r2 y45 t4d1y? === ${encode("How are you today?")}`);
console.log(
  `Th3s 3s 1n 2nc4d3ng t2st. === ${encode("This is an encoding test.")}`
);
console.log("*****");
console.log(`hello === ${decode("h2ll4")}`);
console.log(`How are you today? === ${decode("H4w 1r2 y45 t4d1y?")}`);
console.log(
  `This is an encoding test. === ${decode("Th3s 3s 1n 2nc4d3ng t2st.")}`
);
