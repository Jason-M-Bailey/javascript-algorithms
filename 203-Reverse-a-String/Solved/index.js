// Reverse a String

function reverseString(str) {
  // split the string by ""
  // reverse the string
  // join the string by ""

  return (newString = str.split("").reverse().join(""));
}

// run 'node index.js' in your terminal
// olleh
console.log(reverseString("hello"));

// dlrow olleh
console.log(reverseString("hello world"));

// Code Explanation
// Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

// Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

// Next we chain the reverse() function, which takes our array of characters and reverses them.

// Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

