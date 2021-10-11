// Convert Celsius to FahrenheitPassed
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertToF(celsius) {
  // declare a new variable 'fahrenheit'
  // set fahrenheit as equal to '* (9/5) + 32'
  let fahrenheit = celsius * (9 / 5) + 32;
  
  // return the variable
  return fahrenheit;
}

// run 'node index.js' in your terminal
// answer should be 86
console.log(convertToF(30));
