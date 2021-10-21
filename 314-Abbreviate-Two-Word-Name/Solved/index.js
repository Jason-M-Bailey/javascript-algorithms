// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// Sam Harris => S.H
console.log(abbrevName("Sam Harris"));

// patrick feeney => P.F
console.log(abbrevName("patrick feeney"));

// P Favuzzi => P.F
console.log(abbrevName("P Favuzzi"));
