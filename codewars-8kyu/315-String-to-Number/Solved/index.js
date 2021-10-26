// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function (str) {
  var integer = parseInt(str);
  return integer;
};

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));
