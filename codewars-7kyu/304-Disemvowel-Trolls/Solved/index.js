// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonants = [];

  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      continue;
    } else {
      consonants.push(str[i]);
    }
  }

  return consonants.join("");
}

// run 'node index.js' in your terminal
console.log(`Ths wbst s fr lsrs LL! === ${disemvowel("This website is for losers LOL!")}`);
