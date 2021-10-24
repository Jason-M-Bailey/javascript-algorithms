// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(data) {
  var membership = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 54 && data[i][1] > 7) {
      membership.push("Senior");
    } else {
      membership.push("Open");
    }
  }

  return membership;
}

console.log(
  openOrSenior([
    [18, 20], // Open
    [45, 2], // Open
    [21, 21], // Open
    [61, 12], // Senior
    [55, 1], // Open (handicap is too low for Senior)
    [78, 9], // Senior
  ])
);
