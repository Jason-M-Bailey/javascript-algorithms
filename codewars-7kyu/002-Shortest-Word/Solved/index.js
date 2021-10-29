// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  var shortest = s.length;
  var splitted = s.split(" ");

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length < shortest) {
      shortest = splitted[i].length;
    }
  }

  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));
