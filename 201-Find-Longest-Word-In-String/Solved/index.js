// Find the Longest Word in a String

function findLongestWordLength(str) {
  // convert the string into an array of words
  // split the array based on " "
  let words = str.split(" ");

  // declare a new variable and set the initial value to zero, you will compare the length of the words in the array to this new variable
  let maxLength = 0;

  // loop through words in the array to test length
  // compare the 2 lengths, store the longest of the 2
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  // once for loop is completed, return the maxLength
  return maxLength;
}

// run 'node index.js' in your terminal to test the results
console.log(findLongestWordLength("The quick brown fox jumped over the lazy"));

// Code Explanation
// Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.
