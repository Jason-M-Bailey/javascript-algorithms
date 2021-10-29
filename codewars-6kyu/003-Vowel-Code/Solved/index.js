// Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1, e -> 2, i -> 3, o -> 4, u -> 5

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

function encode(string) {
  var result = [];

  for (let i = 0; i < string.length; i++) {
    string[i] === "a"
      ? result.push(1)
      : string[i] === "e"
      ? result.push(2)
      : string[i] === "i"
      ? result.push(3)
      : string[i] === "o"
      ? result.push(4)
      : string[i] === "u"
      ? result.push(5)
      : result.push(string[i]);
  }
  return result.join("");
}

function decode(string) {
  var result = [];

  for (let i = 0; i < string.length; i++) {
    string[i] === "1"
      ? result.push("a")
      : string[i] === "2"
      ? result.push("e")
      : string[i] === "3"
      ? result.push("i")
      : string[i] === "4"
      ? result.push("o")
      : string[i] === "5"
      ? result.push("u")
      : result.push(string[i]);
  }

  return result.join("");
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

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "a") {
//       result.push(1);
//     } else if (string[i] === "e") {
//       result.push(2);
//     } else if (string[i] === "i") {
//       result.push(3);
//     } else if (string[i] === "o") {
//       result.push(4);
//     } else if (string[i] === "u") {
//       result.push(5);
//     } else result.push(string[i]);
//   }

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "1") {
//       result.push("a");
//     } else if (string[i] === "2") {
//       result.push("e");
//     } else if (string[i] === "3") {
//       result.push("i");
//     } else if (string[i] === "4") {
//       result.push("o");
//     } else if (string[i] === "5") {
//       result.push("u");
//     } else result.push(string[i]);
//   }
