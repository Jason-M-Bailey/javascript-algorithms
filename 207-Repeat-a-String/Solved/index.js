// Repeat a String Repeat a StringPassed
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

console.log(repeatStringNumTimes("*", 3)); // should return the string ***.

console.log(repeatStringNumTimes("abc", 3)); // should return the string abcabcabc.

console.log(repeatStringNumTimes("abc", 4)); // should return the string abcabcabcabc.

console.log(repeatStringNumTimes("abc", 1)); // should return the string abc

console.log(repeatStringNumTimes("*", 8)); // should return the string ********.

console.log(repeatStringNumTimes("abc", -2)); // should return an empty string ("").

console.log(repeatStringNumTimes("abc", 0)); // should return "".
